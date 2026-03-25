const $ = (id) => document.getElementById(id);
const API_BASE = window.location.origin;

const translations = {
  en: {
    brandTitle: "Bear with Me",
    brandTag: "A gentle space for teens in Jordan",
    translateBtn: "العربية",
    darkBtn: "Dark Mode",
    lightBtn: "Light Mode",
    signupBtn: "Sign Up",
    homeHeroTitle: "You are not alone, and you are not a burden.",
    homeHeroText:
      "Bear with Me supports teens in Jordan facing school stress, bullying, family pressure, and emotional exhaustion. Start with a quick wellbeing check, then explore tools that help you breathe, reflect, and feel safer.",
    homeHeroLead:
      "This site was built for teenagers in Jordan who feel drained by school, unsafe at home, targeted by bullying, or stuck in silence. You deserve calm tools, clear information, and someone who listens—starting with Beu, your polar bear companion.",
    homeHeroChatBtn: "Meet Beu",
    homeBearHint: "Tap Beu for a little wave — move the pointer and Beu leans with you.",
    homeBearAria:
      "Beu the polar bear mascot. Tap for a wave and a smile. Move the pointer across Beu to tilt gently.",
    homeMissionTitle: "What this site is really for",
    homeMissionP1:
      "Mental health struggles are common when exams pile up, when peers exclude or hurt you, or when home does not feel like a safe place. Many teens feel like they have to hide the pain so nobody worries—or so nobody makes things worse. Bear with Me does not replace therapy or emergency services, but it gives you a structured place to check in with yourself, learn coping ideas, write privately, and talk gently with Beu.",
    homeMissionP2:
      "Everything here is written to respect your reality in Jordan: academic pressure, social judgment, family expectations, and the courage it takes just to show up each day. Small steps—sleep, breath, one honest sentence, one safe adult—can slowly rebuild hope.",
    homeHowTitle: "How to use Bear with Me",
    homeHow1Key: "Start with the questionnaire.",
    homeHow1Desc:
      "It asks about age, stress, sleep, safety, and what you need today. Your answers help you notice patterns and choose a next step—not to judge you.",
    homeHow2Key: "Open the Mental Health Library",
    homeHow2Desc:
      "when you want clear explanations—burnout, anxiety, bullying, low mood, and unsafe situations—each with practical coping ideas you can try the same day.",
    homeHow3Key: "Use breathing and the daily checklist",
    homeHow3Desc:
      "when your body feels wired or shut down. Short routines can calm your nervous system and make school tasks feel less impossible.",
    homeHow4Key: "Journal with Ghost Mode",
    homeHow4Desc:
      "when you need to write in public or near someone who might glance at your screen. Talk to Beu when you want encouragement and a back-and-forth conversation. Sign up if you want your chat and journal saved for the next day.",
    homeCrisisTitle: "If you are in danger right now",
    homeCrisisText:
      "If you might hurt yourself, or someone is hurting you, your priority is safety—not finishing homework and not staying silent. Call Jordan emergency services (911), reach the Family Protection Department (06 560 6999), or tell a trusted adult who can help you in real life. Beu can listen, but Beu is not a human and cannot come get you. You matter, and urgent situations deserve urgent help.",
    homePrivacyTitle: "Privacy and honesty",
    homePrivacyText:
      "When you create an account, your intake, journal, checklist, and chat can be stored on the server so they return when you log in again. We designed this project for learning and support—we will not share your journal with anyone without your clear consent. For a competition or demo, use a nickname email and a strong password you do not reuse elsewhere.",
    homeExploreTitle: "Explore the tools",
    homeExploreLead: "Each page opens in full detail—pick what matches how you feel today.",
    startCheckin: "Start Your Check-In",
    cardQuestionnaire: "Wellbeing Questionnaire",
    cardQuestionnaireDesc: "Personalized intake to guide your journey.",
    cardChatbot: "Beu Chatbot",
    cardChatbotDesc: "Supportive AI polar bear that listens and responds.",
    cardJournal: "Journal & Safety Hub",
    cardJournalDesc: "Write freely, use ghost mode, and access Jordan hotlines.",
    cardWellness: "Breathing & Daily Checklist",
    cardWellnessDesc: "Nervous-system reset and practical daily structure.",
    cardLibrary: "Mental Health Library",
    cardLibraryDesc: "Detailed cards about common struggles and coping steps.",
    signupTitle: "Create your account",
    signupText: "Save your chat and journal history for tomorrow.",
    namePh: "Name",
    emailPh: "Email",
    passwordPh: "Password",
    createAccountBtn: "Create Account",
    closeBtn: "Close",
    questionnaireTitle: "Wellbeing Intake",
    questionnaireIntro:
      "Answer honestly. This check-in helps personalize your support path. Your entries are stored on this device only.",
    qAge: "How old are you?",
    qStruggles: "What are you struggling with right now?",
    qEnergy: "How is your energy today? (1 low - 5 high)",
    qSleep: "How many hours did you sleep last night?",
    qSafety: "Do you feel safe today?",
    qTrusted: "Is there a trusted adult you can contact?",
    qGoal: "What do you need most today?",
    pickOne: "Pick one",
    optSchool: "School pressure",
    optBullying: "Bullying",
    optFamily: "Abusive or harsh home environment",
    optAnxiety: "Anxiety / panic",
    optSadness: "Sadness / hopelessness",
    optOther: "Other",
    safeYes: "Yes, mostly",
    safeSometimes: "Sometimes",
    safeNo: "No, not really",
    goalPh: "Write here...",
    submitCheckin: "Save Check-In",
    beuTitle: "Beu Chatbot",
    chatTitle: "Talk to Beu, your polar bear support buddy",
    chatIntro:
      "Beu listens with care, asks follow-up questions, and suggests helpful coping steps. If there is immediate danger, contact emergency help now.",
    chatPh: "Type what you're feeling...",
    sendBtn: "Send",
    journalTitle: "Journal & Safety Hub",
    journalPrompt: "Today, your story matters.",
    journalIntro: "Write freely. You can enable Ghost Mode to hide text on screen while typing in public spaces.",
    ghostModeOn: "Enable Ghost Mode",
    ghostModeOff: "Disable Ghost Mode",
    saveEntry: "Save Entry",
    journalPh: "Write whatever is in your heart...",
    encourageText: "You survived every difficult day so far. That means you are stronger than your fear tells you.",
    hotlineTitle: "Jordan Support Hotlines",
    hotlineEmergency: "Emergency:",
    hotlineFamily: "Family Protection Department:",
    hotlineNcw: "National Council for Family Affairs:",
    hotlineNote: "If you are in immediate danger, call emergency services now.",
    wellnessTitle: "Breathing & Daily Checklist",
    breathingTitle: "4-4-6 Breathing Exercise",
    breathingReady: "Press start and follow the rhythm.",
    startBtn: "Start",
    stopBtn: "Stop",
    checklistTitle: "Daily Care Checklist",
    libraryTitle: "Mental Health Library",
  },
  ar: {
    brandTitle: "تحملني",
    brandTag: "مساحة لطيفة للمراهقين في الأردن",
    translateBtn: "English",
    darkBtn: "الوضع الداكن",
    lightBtn: "الوضع الفاتح",
    signupBtn: "إنشاء حساب",
    homeHeroTitle: "أنت لست وحدك، ولست عبئًا.",
    homeHeroText:
      "موقع تحملني يدعم المراهقين في الأردن الذين يواجهون ضغط المدرسة والتنمر وضغط الأسرة والإرهاق النفسي. ابدأ بفحص سريع ثم استكشف أدوات تساعدك على التنفس والهدوء والشعور بالأمان.",
    homeHeroLead:
      "هذا الموقع صُمّم للمراهقين في الأردن الذين يشعرون بالإنهاك بسبب المدرسة، أو عدم الأمان في البيت، أو التنمر، أو الصمت المزمن. تستحق أدوات هادئة ومعلومات واضحة ومن يستمع إليك—نبدأ مع بيو، الدب القطبي رفيقك.",
    homeHeroChatBtn: "تعرف على بيو",
    homeBearHint: "اضغط على بيو لتحيّة صغيرة — حرّك المؤشر ليميل معك.",
    homeBearAria:
      "تميمة بيو الدب القطبي. اضغط له للتحية والابتسامة. حرّك المؤشر فوقه ليميل بلطف.",
    homeMissionTitle: "لماذا وُجد هذا الموقع",
    homeMissionP1:
      "صعوبات الصحة النفسية شائعة عندما تتراكم الامتحانات، أو عندما يهمشك الآخرون أو يؤذونك، أو عندما لا يشعر البيت بالأمان. كثير من المراهقين يخفون الألم كي لا يقلق أحد—أو كي لا يزداد الوضع سوءًا. تحملني لا يعالج بديلًا عن العلاج أو الطوارئ، لكنه يمنحك مكانًا منظمًا لتقييم حالتك، وتعلم خطوات مواجهة، والكتابة بخصوصية، والحديث بلطف مع بيو.",
    homeMissionP2:
      "كل النصوص هنا تحترم واقعك في الأردن: ضغط الدراسة، نظرة المجتمع، توقعات العائلة، والشجاعة التي تتطلبها كل يوم. خطوات صغيرة—النوم، التنفس، جملة صادقة واحدة، شخص بالغ موثوق—قد تعيد تدريجيًا شعور الأمل.",
    homeHowTitle: "كيف تستخدم تحملني",
    homeHow1Key: "ابدأ بالاستبيان.",
    homeHow1Desc:
      "يسأل عن العمر والضغط والنوم والأمان واحتياجك اليوم. إجاباتك تساعدك على الملاحظة واختيار خطوة تالية—لا لإصدار حكم عليك.",
    homeHow2Key: "افتح مكتبة الصحة النفسية",
    homeHow2Desc:
      "عندما تريد شرحًا واضحًا للإنهاك والقلق والتنمر والحزن والمواقف غير الآمنة—مع أفكار عملية يمكن تجربتها في اليوم نفسه.",
    homeHow3Key: "استخدم التنفس وقائمة اليوم",
    homeHow3Desc:
      "عندما يشعر جسمك بالتوتر أو الانغلاق. روتين قصير يهدئ الجهاز العصبي ويجعل واجبات المدرسة أقل استحالة.",
    homeHow4Key: "المذكرة مع وضع الشبح",
    homeHow4Desc:
      "عندما تحتاج للكتابة في مكان عام أو قرب من قد ينظر لشاشتك. تحدث مع بيو عندما تريد تشجيعًا وحوارًا. سجّل حسابًا إذا أردت حفظ المحادثة والمذكرة لليوم التالي.",
    homeCrisisTitle: "إذا كنت في خطر الآن",
    homeCrisisText:
      "إذا كنت قد تؤذي نفسك، أو شخص ما يؤذيك، فأولويتك السلامة—ليس إنهاء الواجب ولا الصمت. اتصل بطوارئ الأردن 911، أو إدارة حماية الأسرة 06 560 6999، أو أخبر شخصًا بالغًا موثوقًا يستطيع مساعدتك في الواقع. بيو يستمع، لكنه ليس إنسانًا ولا يستطيع الوصول إليك. أنت مهم، والحالات الطارئة تستحق مساعدة فورية.",
    homePrivacyTitle: "الخصوصية والصدق",
    homePrivacyText:
      "عند إنشاء حساب، قد تُحفظ بيانات التقييم والمذكرة والقائمة والمحادثة على الخادم لتعود عند تسجيل الدخول مجددًا. صمّمنا المشروع للتعلم والدعم—ولا يجب مشاركة مذكرتك دون موافقتك الواضحة. في المسابقات التجريبية استخدم بريدًا وهميًا وكلمة مرور قوية لا تعيد استخدامها.",
    homeExploreTitle: "استكشف الأدوات",
    homeExploreLead: "كل صفحة فيها تفاصيل كاملة—اختر ما يناسب شعورك اليوم.",
    startCheckin: "ابدأ التقييم",
    cardQuestionnaire: "استبيان الصحة النفسية",
    cardQuestionnaireDesc: "أسئلة مبدئية لتخصيص مسار الدعم لك.",
    cardChatbot: "شات بوت بيو",
    cardChatbotDesc: "دب قطبي داعم يستمع لك ويتفاعل معك.",
    cardJournal: "المذكرات ومركز الأمان",
    cardJournalDesc: "اكتب بحرية، فعّل وضع الشبح، واطّلع على أرقام المساندة في الأردن.",
    cardWellness: "التنفس وقائمة اليوم",
    cardWellnessDesc: "تهدئة للجسم وخطوات عملية لليوم.",
    cardLibrary: "مكتبة الصحة النفسية",
    cardLibraryDesc: "بطاقات مفصلة عن المشكلات النفسية وطرق التعامل معها.",
    signupTitle: "أنشئ حسابك",
    signupText: "احفظ محادثاتك ومذكراتك للغد.",
    namePh: "الاسم",
    emailPh: "البريد الإلكتروني",
    passwordPh: "كلمة المرور",
    createAccountBtn: "إنشاء الحساب",
    closeBtn: "إغلاق",
    questionnaireTitle: "تقييم الحالة النفسية",
    questionnaireIntro: "أجب بصدق. هذا التقييم يساعدنا على تخصيص أدوات الدعم لك. يتم حفظ البيانات على هذا الجهاز فقط.",
    qAge: "كم عمرك؟",
    qStruggles: "ما الذي تعاني منه الآن؟",
    qEnergy: "كيف مستوى طاقتك اليوم؟ (1 منخفض - 5 مرتفع)",
    qSleep: "كم ساعة نمت البارحة؟",
    qSafety: "هل تشعر بالأمان اليوم؟",
    qTrusted: "هل يوجد شخص بالغ موثوق يمكنك التواصل معه؟",
    qGoal: "ما أكثر شيء تحتاجه اليوم؟",
    pickOne: "اختر خيارًا",
    optSchool: "ضغط المدرسة",
    optBullying: "التنمر",
    optFamily: "بيئة منزلية مسيئة أو قاسية",
    optAnxiety: "القلق / نوبات الهلع",
    optSadness: "الحزن / اليأس",
    optOther: "أخرى",
    safeYes: "نعم غالبًا",
    safeSometimes: "أحيانًا",
    safeNo: "لا، ليس كثيرًا",
    goalPh: "اكتب هنا...",
    submitCheckin: "حفظ التقييم",
    beuTitle: "شات بوت بيو",
    chatTitle: "تحدث مع بيو، الدب القطبي الداعم",
    chatIntro: "بيو يستمع باهتمام، يسأل أسئلة متابعة، ويقترح خطوات عملية. إذا كان هناك خطر فوري، تواصل مع الطوارئ فورًا.",
    chatPh: "اكتب ما تشعر به...",
    sendBtn: "إرسال",
    journalTitle: "المذكرات ومركز الأمان",
    journalPrompt: "قصة اليوم مهمة.",
    journalIntro: "اكتب بحرية. يمكنك تفعيل وضع الشبح لإخفاء النص أثناء الكتابة في الأماكن العامة.",
    ghostModeOn: "تفعيل وضع الشبح",
    ghostModeOff: "إيقاف وضع الشبح",
    saveEntry: "حفظ المذكرة",
    journalPh: "اكتب كل ما في قلبك...",
    encourageText: "لقد تجاوزت كل الأيام الصعبة حتى الآن، وهذا يعني أنك أقوى مما يخبرك به خوفك.",
    hotlineTitle: "أرقام الدعم في الأردن",
    hotlineEmergency: "الطوارئ:",
    hotlineFamily: "إدارة حماية الأسرة:",
    hotlineNcw: "المجلس الوطني لشؤون الأسرة:",
    hotlineNote: "إذا كنت في خطر فوري فاتصل بالطوارئ الآن.",
    wellnessTitle: "التنفس وقائمة اليوم",
    breathingTitle: "تمرين التنفس 4-4-6",
    breathingReady: "اضغط ابدأ واتبع الإيقاع.",
    startBtn: "ابدأ",
    stopBtn: "إيقاف",
    checklistTitle: "قائمة العناية اليومية",
    libraryTitle: "مكتبة الصحة النفسية",
  },
};

const checklistItems = {
  en: [
    "Drink one full glass of water after waking up.",
    "Eat one balanced meal with protein, carbs, and fruit.",
    "Take a 10-minute walk or stretch break.",
    "Send one message to a trusted friend or adult.",
    "Complete one school task in a focused 25-minute block.",
    "Write one sentence about what you handled well today.",
    "Set a sleep target and put your phone away 30 minutes before bed.",
  ],
  ar: [
    "اشرب كوب ماء كامل بعد الاستيقاظ.",
    "تناول وجبة متوازنة تحتوي بروتين وكربوهيدرات وفاكهة.",
    "امشِ أو قم بتمارين تمدد لمدة 10 دقائق.",
    "أرسل رسالة لشخص موثوق صديقًا أو بالغًا.",
    "أنجز مهمة مدرسية واحدة بتركيز لمدة 25 دقيقة.",
    "اكتب جملة واحدة عمّا أنجزته بشكل جيد اليوم.",
    "حدد وقت نوم واضح وأبعد الهاتف 30 دقيقة قبل النوم.",
  ],
};

const libraryData = {
  en: [
    {
      title: "School Burnout",
      body: "Signs include constant exhaustion, reduced concentration, and feeling numb about grades. Try chunking tasks into 20-25 minute focus sessions, taking mini breaks, and asking a teacher for one realistic adjustment.",
    },
    {
      title: "Bullying and Social Exclusion",
      body: "Bullying can create shame and fear, but the harm is not your fault. Document incidents (dates, place, what happened), tell a trusted adult, and avoid isolated areas when possible. Prioritize your safety over confrontation.",
    },
    {
      title: "Anxiety and Panic",
      body: "Anxiety often shows up as racing thoughts, chest tightness, and overthinking worst outcomes. Use grounding: name five things you can see, four you can touch, three you can hear. Then slow your breath with 4-4-6 rhythm.",
    },
    {
      title: "Low Mood and Hopelessness",
      body: "When sadness lasts for days, daily routine can collapse. Start tiny: shower, eat something, open a window, and write one sentence in your journal. Small actions can restart motivation and show your brain that change is possible.",
    },
    {
      title: "Abusive Environments",
      body: "If home or school feels unsafe, create a safety plan: identify a safer room, memorize emergency numbers, and keep one trusted contact informed. In immediate danger, call emergency services right away.",
    },
  ],
  ar: [
    {
      title: "الإنهاك الدراسي",
      body: "من علاماته التعب المستمر وضعف التركيز وفقدان الحماس للدرجات. جرّب تقسيم المهام إلى جلسات تركيز 20-25 دقيقة مع فواصل قصيرة، واطلب تعديلًا واقعيًا واحدًا من المعلم.",
    },
    {
      title: "التنمر والعزلة الاجتماعية",
      body: "التنمر يسبب الخجل والخوف، لكنه ليس خطأك. وثّق الحوادث (التاريخ والمكان وما حدث)، وأخبر شخصًا بالغًا موثوقًا، وتجنب الأماكن المعزولة قدر الإمكان. سلامتك أهم من المواجهة.",
    },
    {
      title: "القلق ونوبات الهلع",
      body: "القلق يظهر كأفكار متسارعة وضيق صدر وتوقع الأسوأ. استخدم التأريض: سمِّ خمس أشياء تراها، أربع تلمسها، ثلاث تسمعها. ثم خفف التنفس بإيقاع 4-4-6.",
    },
    {
      title: "الحزن واليأس",
      body: "عندما يستمر الحزن لأيام، قد ينهار الروتين اليومي. ابدأ بخطوات صغيرة: استحم، كل شيئًا بسيطًا، افتح النافذة، واكتب جملة واحدة في المذكرة. الأفعال الصغيرة تعيد الحركة والأمل.",
    },
    {
      title: "البيئات المسيئة",
      body: "إذا كان المنزل أو المدرسة غير آمنين، ضع خطة أمان: حدد مكانًا أكثر أمانًا، واحفظ أرقام الطوارئ، وأبقِ شخصًا موثوقًا على اطلاع. في الخطر الفوري اتصل بالطوارئ مباشرة.",
    },
  ],
};

const beuPatterns = [
  { words: ["suicide", "kill myself", "end my life", "hurt myself"], key: "crisis" },
  { words: ["bully", "bullied", "تنمر"], key: "bullying" },
  { words: ["school", "exam", "grades", "دراسة"], key: "school" },
  { words: ["family", "home", "abuse", "abusive", "عنف"], key: "family" },
  { words: ["anxious", "panic", "قلق"], key: "anxiety" },
  { words: ["sad", "hopeless", "depressed", "حزين"], key: "sadness" },
];

const beuReplies = {
  en: {
    opener: "Hi, I am Beu. I am here with you. What feels hardest today?",
    crisis:
      "I am really glad you told me. Your safety is the priority right now. Please call emergency 911 in Jordan or contact a trusted adult immediately. If you want, type: 'help me make a safety plan' and I will guide you step by step.",
    bullying:
      "That sounds painful. Bullying is not your fault. Can you tell me where it happens most? We can make a plan: documentation, safe routes, and one trusted person to inform.",
    school:
      "School pressure can feel crushing. Let us reduce the load: pick one task that takes less than 20 minutes and do only that now. Want me to help you choose the easiest first step?",
    family:
      "I am sorry you are dealing with this. You deserve respect and safety. If things escalate, go to a safer place and contact a trusted adult or emergency services. I can help you write a short message asking for help.",
    anxiety:
      "Let us calm your body first. Breathe in 4 seconds, hold 4, out 6. Repeat 5 rounds. Then tell me where anxiety feels strongest in your body.",
    sadness:
      "Thank you for sharing this. When sadness is heavy, tiny actions matter. Choose one now: drink water, wash your face, or send one message to someone safe. Which one feels possible?",
    follow:
      "I hear you. Tell me a bit more, and I will stay with you while we figure out one practical next step.",
  },
  ar: {
    opener: "مرحبًا، أنا بيو. أنا هنا معك. ما أصعب شيء اليوم؟",
    crisis:
      "شكرًا لأنك أخبرتني. سلامتك هي الأولوية الآن. اتصل بالطوارئ 911 في الأردن أو تواصل فورًا مع شخص بالغ موثوق. إذا رغبت، اكتب: ساعدني بخطة أمان وسأرشدك خطوة بخطوة.",
    bullying:
      "هذا مؤلم جدًا. التنمر ليس خطأك. هل يمكن أن تخبرني أين يحدث غالبًا؟ لنضع خطة: توثيق، طرق آمنة، وشخص موثوق لإبلاغه.",
    school:
      "ضغط الدراسة قد يكون ساحقًا. لنخفف الحمل: اختر مهمة واحدة أقل من 20 دقيقة وابدأ بها فقط الآن. هل تريد مني مساعدتك في اختيار أول خطوة سهلة؟",
    family:
      "أنا آسف أنك تمر بهذا. أنت تستحق الاحترام والأمان. إذا تصاعد الوضع، اذهب لمكان أكثر أمانًا وتواصل مع شخص موثوق أو الطوارئ. أستطيع مساعدتك في كتابة رسالة طلب مساعدة.",
    anxiety:
      "لنهدئ الجسم أولًا. خذ شهيق 4 ثوانٍ، احبس 4، زفير 6. كرر 5 مرات. بعدها أخبرني أين تشعر بالقلق أكثر في جسمك.",
    sadness:
      "شكرًا لمشاركتك. عندما يكون الحزن ثقيلًا، الخطوات الصغيرة تصنع فرقًا. اختر الآن خطوة: اشرب ماء، اغسل وجهك، أو أرسل رسالة لشخص آمن. ما الأسهل لك؟",
    follow:
      "أنا سامعك. احكِ لي أكثر، وسأبقى معك لنحدد خطوة عملية واحدة.",
  },
};

function getLang() {
  return localStorage.getItem("lang") || "en";
}

function getToken() {
  return localStorage.getItem("token") || "";
}

function setToken(token) {
  if (token) localStorage.setItem("token", token);
}

async function api(path, method = "GET", body) {
  const token = getToken();
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

function applyTranslations() {
  const lang = getLang();
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) el.placeholder = dict[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
  });
  const themeBtn = $("themeBtn");
  if (themeBtn) {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    themeBtn.textContent = dark ? dict.lightBtn : dict.darkBtn;
  }
}

function initTheme() {
  const current = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", current);
  const themeBtn = $("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const now = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", now);
      localStorage.setItem("theme", now);
      applyTranslations();
    });
  }
}

function initTranslate() {
  const translateBtn = $("translateBtn");
  if (!translateBtn) return;
  translateBtn.addEventListener("click", () => {
    const lang = getLang() === "en" ? "ar" : "en";
    localStorage.setItem("lang", lang);
    applyTranslations();
    renderChecklist();
    renderLibrary();
  });
}

function initSignupModal() {
  const modal = $("signupModal");
  const open = $("signupBtn");
  const close = $("closeModalBtn");
  const form = $("signupForm");
  if (!modal || !open || !close || !form) return;

  open.addEventListener("click", () => modal.classList.remove("hidden"));
  close.addEventListener("click", () => modal.classList.add("hidden"));
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: $("name").value.trim(),
        email: $("email").value.trim(),
        password: $("password").value.trim(),
      };
      const data = await api("/api/auth/signup", "POST", payload);
      setToken(data.token);
      localStorage.setItem("bearUser", JSON.stringify(data.user));
      alert(getLang() === "ar" ? "تم إنشاء الحساب وتسجيل الدخول." : "Account created and logged in.");
      modal.classList.add("hidden");
      form.reset();
    } catch (err) {
      const msg = err.message || "Sign up failed";
      if (msg.includes("exists")) {
        try {
          const loginData = await api("/api/auth/login", "POST", {
            email: $("email").value.trim(),
            password: $("password").value.trim(),
          });
          setToken(loginData.token);
          localStorage.setItem("bearUser", JSON.stringify(loginData.user));
          alert(getLang() === "ar" ? "تم تسجيل الدخول." : "Logged in successfully.");
          modal.classList.add("hidden");
          form.reset();
        } catch {
          alert(getLang() === "ar" ? "البريد موجود، وكلمة المرور غير صحيحة." : "Email exists and password is incorrect.");
        }
      } else {
        alert(msg);
      }
    }
  });
}

function initIntakeForm() {
  const form = $("intakeForm");
  const result = $("intakeResult");
  if (!form || !result) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      age: $("age").value,
      struggle: $("struggle").value,
      energy: $("energy").value,
      sleep: $("sleep").value,
      safety: $("safety").value,
      trusted: $("trusted").value,
      goal: $("goal").value.trim(),
      createdAt: new Date().toISOString(),
    };
    try {
      if (getToken()) {
        await api("/api/intakes", "POST", data);
      } else {
        localStorage.setItem("latestIntake", JSON.stringify(data));
      }
      const ar = getLang() === "ar";
      result.classList.remove("hidden");
      result.textContent = ar
        ? "تم حفظ التقييم. الخطوة التالية: انتقل إلى شات بيو أو صفحة التنفس حسب احتياجك اليوم."
        : "Check-in saved. Next step: visit Beu Chatbot or Breathing page based on what you need today.";
    } catch (err) {
      alert(err.message);
    }
  });
}

function appendMsg(text, type = "bot") {
  const box = $("chatBox");
  if (!box) return;
  const msg = document.createElement("div");
  msg.className = `msg ${type}`;
  msg.textContent = text;
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}

function getBeuReply(input, lang) {
  const lower = input.toLowerCase();
  const set = beuReplies[lang];
  for (const p of beuPatterns) {
    if (p.words.some((w) => lower.includes(w))) return set[p.key];
  }
  if (lower.length > 120) {
    return lang === "ar"
      ? "أقدّر ثقتك وتفاصيلك. ما أكثر نقطة تؤلمك الآن؟ دعنا نختار خطوة واحدة تحميك اليوم."
      : "Thank you for sharing in detail. What hurts the most right now? Let us pick one step that protects you today.";
  }
  return set.follow;
}

async function loadChatHistory() {
  if (!getToken()) return;
  const history = await api("/api/chat/history");
  history.forEach((row) => {
    appendMsg(row.userText, "user");
    appendMsg(row.botText, "bot");
  });
}

function initChat() {
  const form = $("chatForm");
  const input = $("chatInput");
  if (!form || !input) return;
  const lang = getLang();
  appendMsg(beuReplies[lang].opener, "bot");
  loadChatHistory().catch(() => {});
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    appendMsg(text, "user");
    let reply = "";
    try {
      if (getToken()) {
        const data = await api("/api/chat", "POST", { message: text, lang: getLang() });
        reply = data.reply;
      } else {
        reply = getBeuReply(text, getLang());
      }
    } catch {
      reply = getBeuReply(text, getLang());
    }
    setTimeout(() => appendMsg(reply, "bot"), 300);
    input.value = "";
  });
}

async function initJournal() {
  const ta = $("journalText");
  const saveBtn = $("saveJournalBtn");
  const ghostBtn = $("ghostModeBtn");
  if (!ta || !saveBtn || !ghostBtn) return;
  if (getToken()) {
    try {
      const latest = await api("/api/journal/latest");
      ta.value = latest?.content || "";
    } catch {
      ta.value = localStorage.getItem("journalEntry") || "";
    }
  } else {
    ta.value = localStorage.getItem("journalEntry") || "";
  }
  let ghost = false;
  ghostBtn.addEventListener("click", () => {
    ghost = !ghost;
    ta.classList.toggle("ghost", ghost);
    ghostBtn.textContent = ghost
      ? translations[getLang()].ghostModeOff
      : translations[getLang()].ghostModeOn;
  });
  saveBtn.addEventListener("click", async () => {
    try {
      if (getToken()) await api("/api/journal", "POST", { content: ta.value });
      else localStorage.setItem("journalEntry", ta.value);
      alert(getLang() === "ar" ? "تم حفظ المذكرة." : "Journal saved.");
    } catch (err) {
      alert(err.message);
    }
  });
}

let breathingTimer = null;
function initBreathing() {
  const start = $("startBreathingBtn");
  const stop = $("stopBreathingBtn");
  const guide = $("breathingGuide");
  const circle = $("breatheCircle");
  if (!start || !stop || !guide || !circle) return;
  const script = {
    en: ["Inhale 4", "Hold 4", "Exhale 6"],
    ar: ["شهيق 4", "ثبات 4", "زفير 6"],
  };
  start.addEventListener("click", () => {
    let i = 0;
    if (breathingTimer) clearInterval(breathingTimer);
    breathingTimer = setInterval(() => {
      const lang = getLang();
      guide.textContent = script[lang][i % 3];
      circle.classList.toggle("expand", i % 3 === 0);
      i += 1;
    }, 4000);
  });
  stop.addEventListener("click", () => {
    clearInterval(breathingTimer);
    breathingTimer = null;
    circle.classList.remove("expand");
    guide.textContent = translations[getLang()].breathingReady;
  });
}

async function renderChecklist() {
  const list = $("dailyChecklist");
  if (!list) return;
  const lang = getLang();
  let serverDone = {};
  if (getToken()) {
    try {
      const rows = await api("/api/checklist");
      rows.forEach((r) => {
        serverDone[r.item_key] = r.done === 1;
      });
    } catch {
      serverDone = {};
    }
  }
  list.innerHTML = "";
  checklistItems[lang].forEach((item, idx) => {
    const li = document.createElement("li");
    const id = `task-${idx}`;
    const done = getToken() ? !!serverDone[id] : localStorage.getItem(id) === "1";
    li.innerHTML = `<input type="checkbox" id="${id}" ${done ? "checked" : ""} /> <label for="${id}">${item}</label>`;
    list.appendChild(li);
    li.querySelector("input").addEventListener("change", async (e) => {
      if (getToken()) {
        await api("/api/checklist", "POST", { itemKey: id, done: e.target.checked });
      } else {
        localStorage.setItem(id, e.target.checked ? "1" : "0");
      }
    });
  });
}

function initHomeBear() {
  const bear = $("homeBear");
  if (!bear) return;
  const onMove = (e) => {
    const r = bear.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const tilt = Math.max(-10, Math.min(10, ((e.clientX - cx) / Math.max(r.width / 2, 1)) * 10));
    bear.style.setProperty("--bear-tilt", `${tilt}deg`);
  };
  const onLeave = () => bear.style.setProperty("--bear-tilt", "0deg");
  bear.addEventListener("mousemove", onMove);
  bear.addEventListener("mouseleave", onLeave);
  bear.addEventListener("click", () => {
    bear.classList.add("bear--wave", "bear--happy");
    window.setTimeout(() => {
      bear.classList.remove("bear--wave", "bear--happy");
    }, 950);
  });
}

function renderLibrary() {
  const wrap = $("libraryCards");
  if (!wrap) return;
  const lang = getLang();
  wrap.innerHTML = "";
  libraryData[lang].forEach((card) => {
    const article = document.createElement("article");
    article.className = "feature-card glass";
    article.innerHTML = `<h3>${card.title}</h3><p>${card.body}</p>`;
    wrap.appendChild(article);
  });
}

initTheme();
initTranslate();
applyTranslations();
initSignupModal();
initIntakeForm();
initChat();
initJournal();
initBreathing();
renderChecklist();
renderLibrary();
initHomeBear();
