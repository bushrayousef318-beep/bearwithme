<?php
header('Content-Type: application/json');

// 1. التأكد من الأكشن (Action)
$action = $_GET['action'] ?? '';

if ($action == 'chat_with_beu') {
    $data = json_decode(file_get_contents("php://input"), true);
    $user_message = $data['message'] ?? '';
    
    // تأكدي أن المفتاح صحيح هنا
    $api_key = "AIzaSyB0f0VAOaDSY0k8-1Qg02fTRqZDC4zH9Pc"; 
    // تحديث الرابط لاستخدام Gemini 2.0 Flash (موديل 2026 السريع)

$api_url = "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash-lite:generateContent?key=" . $api_key;

// 4. تجهيز الـ Payload (التعليمات)
    $payload = [
        "contents" => [
            [
                "parts" => [
                    ["text" => "أنت 'بيو'، داعم نفسي للمراهقين. رسالة المستخدم: " . $user_message]
                ]
            ]
        ],
        "generationConfig" => [
            "temperature" => 0.6,
            "maxOutputTokens" => 300
        ]
    ];

    // 5. إرسال الطلب عبر cURL
    $ch = curl_init($api_url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    // سطر الأمان الضروري لـ XAMPP
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 

    $response = curl_exec($ch);
    curl_close($ch);

    // 6. معالجة الرد وإرساله للمتصفح
    $result = json_decode($response, true);
    $beu_reply = $result['candidates'][0]['content']['parts'][0]['text'] ?? "عذراً، أحتاج لغفوة..";

    echo json_encode(["reply" => $beu_reply]);
}
?>
