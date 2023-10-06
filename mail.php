<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

//Load Composer's autoloader
require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $_POST = json_decode(file_get_contents("php://input"), true);

    $dotenv = Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_OFF;                         //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = $_ENV['SMTP_HOST'];                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = $_ENV['SMTP_USERNAME'];                 //SMTP username
        $mail->Password   = $_ENV['SMTP_PASSWORD'];                 //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom($_ENV['SMTP_USERNAME']);   
        $mail->addAddress($_ENV['SMTP_TO']);        //Add a recipient 

        //Content
        $mail->isHTML(false);
        $mail->Subject = "Estetika.agency | Обратная связь";
        $mail->Body = $_POST['phoneNumber'];

        $mail->send();

        $response = array(
            'status' => 'success', 
            'message' => "Suiii"
        );
        echo json_encode($response);
    } 
    catch (Exception $e) {
        $response = array(
            'status' => 'error', 
            'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"
        );
        die(json_encode($response));
    }
} 
else {
    // Handle cases where the script is accessed with an unsupported method
    // or without a POST request
    $response = array('status' => 'error', 'message' => "Invalid request.");
    die(json_encode($response));
}