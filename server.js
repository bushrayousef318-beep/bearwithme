const path = require("path");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

let db;

async function initDb() {
  db = await open({
    filename: path.join(__dirname, "bearwithme.db"),
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS intakes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      age INTEGER,
      struggle TEXT,
      energy INTEGER,
      sleep INTEGER,
      safety TEXT,
      trusted TEXT,
      goal TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS journal_entries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS chat_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      user_text TEXT NOT NULL,
      bot_text TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS checklist_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      item_key TEXT NOT NULL,
      done INTEGER DEFAULT 0,
      UNIQUE(user_id, item_key),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);
}

function auth(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

function beuReply(message, lang = "en") {
  const lower = message.toLowerCase();
  const crisis = ["suicide", "kill myself", "end my life", "hurt myself", "انتحار"];
  if (crisis.some((w) => lower.includes(w))) {
    return lang === "ar"
      ? "أنا ممتن أنك شاركتني هذا. سلامتك الآن أهم شيء. اتصل بالطوارئ 911 أو بشخص بالغ موثوق فورًا."
      : "Thank you for telling me. Your safety comes first. Please call emergency 911 or a trusted adult now.";
  }
  if (lower.includes("bully") || lower.includes("تنمر")) {
    return lang === "ar"
      ? "التنمر ليس خطأك. دعنا نضع خطة أمان: توثيق، شخص موثوق، ومكان آمن."
      : "Bullying is not your fault. Let us make a safety plan: document incidents, contact a trusted adult, and stay in safer spaces.";
  }
  if (lower.includes("school") || lower.includes("exam") || lower.includes("دراسة")) {
    return lang === "ar"
      ? "ضغط المدرسة مؤلم. لنبدأ بمهمة صغيرة أقل من 20 دقيقة ثم نرتاح."
      : "School pressure is heavy. Start with one task under 20 minutes, then take a short break.";
  }
  if (lower.includes("family") || lower.includes("abuse") || lower.includes("عنف")) {
    return lang === "ar"
      ? "أنت تستحق الأمان والاحترام. إذا شعرت بالخطر، اذهب لمكان آمن واتصل بشخص موثوق أو الطوارئ."
      : "You deserve safety and respect. If danger rises, move to a safer place and contact a trusted adult or emergency services.";
  }
  return lang === "ar"
    ? "أنا هنا معك. احكِ لي أكثر عمّا تشعر به الآن، وسنحدد خطوة عملية واحدة لليوم."
    : "I am here with you. Tell me a little more about what you feel right now, and we will choose one practical step for today.";
}

app.post("/api/auth/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: "Missing fields" });
  const hash = await bcrypt.hash(password, 10);
  try {
    const result = await db.run(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [name, email.toLowerCase(), hash]
    );
    const token = jwt.sign({ userId: result.lastID, email }, JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user: { id: result.lastID, name, email } });
  } catch {
    res.status(409).json({ error: "Email already exists" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await db.get("SELECT * FROM users WHERE email = ?", [String(email || "").toLowerCase()]);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });
  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
});

app.get("/api/me", auth, async (req, res) => {
  const user = await db.get("SELECT id, name, email, created_at FROM users WHERE id = ?", [req.user.userId]);
  res.json(user);
});

app.post("/api/intakes", auth, async (req, res) => {
  const { age, struggle, energy, sleep, safety, trusted, goal } = req.body;
  await db.run(
    "INSERT INTO intakes (user_id, age, struggle, energy, sleep, safety, trusted, goal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [req.user.userId, age, struggle, energy, sleep, safety, trusted, goal]
  );
  res.json({ ok: true });
});

app.get("/api/intakes/latest", auth, async (req, res) => {
  const intake = await db.get("SELECT * FROM intakes WHERE user_id = ? ORDER BY id DESC LIMIT 1", [req.user.userId]);
  res.json(intake || null);
});

app.post("/api/journal", auth, async (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ error: "Content required" });
  await db.run("INSERT INTO journal_entries (user_id, content) VALUES (?, ?)", [req.user.userId, content]);
  res.json({ ok: true });
});

app.get("/api/journal/latest", auth, async (req, res) => {
  const row = await db.get("SELECT * FROM journal_entries WHERE user_id = ? ORDER BY id DESC LIMIT 1", [req.user.userId]);
  res.json(row || null);
});

app.post("/api/checklist", auth, async (req, res) => {
  const { itemKey, done } = req.body;
  await db.run(
    "INSERT INTO checklist_items (user_id, item_key, done) VALUES (?, ?, ?) ON CONFLICT(user_id, item_key) DO UPDATE SET done = excluded.done",
    [req.user.userId, itemKey, done ? 1 : 0]
  );
  res.json({ ok: true });
});

app.get("/api/checklist", auth, async (req, res) => {
  const rows = await db.all("SELECT item_key, done FROM checklist_items WHERE user_id = ?", [req.user.userId]);
  res.json(rows);
});

app.post("/api/chat", auth, async (req, res) => {
  const { message, lang } = req.body;
  if (!message) return res.status(400).json({ error: "Message required" });
  const reply = beuReply(message, lang || "en");
  await db.run("INSERT INTO chat_messages (user_id, user_text, bot_text) VALUES (?, ?, ?)", [
    req.user.userId,
    message,
    reply,
  ]);
  res.json({ reply });
});

app.get("/api/chat/history", auth, async (req, res) => {
  const rows = await db.all(
    "SELECT id, user_text as userText, bot_text as botText, created_at as createdAt FROM chat_messages WHERE user_id = ? ORDER BY id ASC",
    [req.user.userId]
  );
  res.json(rows);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Bear with Me running at http://localhost:${PORT}`);
  });
});
