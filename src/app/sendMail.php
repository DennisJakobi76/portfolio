<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS":
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type");
        exit;

    case "POST":
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        if (!$params || !isset($params->email)) {
            http_response_code(400);
            echo "Invalid input";
            exit;
        }

        $email = $params->email;
        $name = $params->name;
        $messageBody = $params->message;

        $recipient = 'info@dennisjakobi.net';  
        $subject = "Contact From <$email>";
        $message = "From: " . $name . "<br><br>" . nl2br($messageBody);

        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=utf-8',
            'From: noreply@dennisjakobi.net'
        ];

        if (mail($recipient, $subject, $message, implode("\r\n", $headers))) {
            echo "Message sent successfully";
        } else {
            http_response_code(500);
            echo "Mail sending failed";
        }
        break;

    default:
        header("Allow: POST", true, 405);
        exit;
}
