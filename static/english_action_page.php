<?php
  
  //require 'vendor/autoload.php';


  /*  $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $visitor_email = $_POST['email'];
    $service = $_POST['type'];
    $deadline = $_POST['due date'];

    $message = $_POST['extra'];
  
//Validate first
        if(empty($firstname)||empty($visitor_email)) 
        {
            echo "Name and email are mandatory!";
            exit;
        }

        if(IsInjected($visitor_email))
        {
            echo "Bad email value!";
            exit;
        }


        

    $email_from = 'wasifz9@gmail.com';


    $email_subject = "$firstname $lastname $service by $deadline";

    $email_body = "You have received a new message from the user $firstname $lastname.\n Here is the message:\n $message";

  $to = "wasif.zulkernine@mail.utoronto.ca";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  mail($to,$email_subject,$email_body,$headers, "-f {$visitor_email}");*/




/*$from = new SendGrid\Email("wasifz9@gmail.com", "wasifz9@gmail.com");
$subject = "Hello World from the SendGrid PHP Library!";
$to = new SendGrid\Email("wasifz9@gmail.comn", "wasifz9@gmail.com");
$content = new SendGrid\Content("text/plain", "Hello, Email!");
$mail = new SendGrid\Mail($from, $subject, $to, $content);

$apiKey = getenv('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');
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);
echo $response->statusCode();
echo $response->headers();
echo $response->body();*/

/*
require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer();

$mail->isSMTP();
$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = "ssl";
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->Username = 'wasifz9@gmail.com';
$mail->Password = 'zulkernine';

$mail->setFrom('wasifz9@gmail.com', 'Senaid Bacinovic');
$mail->addAddress('wasifz9@gmail.com');
$mail->Subject = 'SMTP email test';
$mail->Body = 'this is some body';

if ($mail->send())
    echo "Mail sent";
*/
$request_body = json_decode('{
    "personalizations": [
      {
        "to": [
          {
            "email": "wasifz9@gmail.com"
          }
        ],
        "subject": "Hello World from the SendGrid PHP Library!"
      }
    ],
    "from": {
      "email": "wasifz9@gmail.com"
    },
    "content": [
      {
        "type": "text/plain",
        "value": "Hello, Email!"
      }
    ]
  }');
  
  $apiKey = getenv('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');
  $sg = new \SendGrid($apiKey);
  
  $response = $sg->client->mail()->send()->post($request_body);
  echo $response->statusCode();
  echo $response->body();
  echo $response->headers();


 
 ?>
