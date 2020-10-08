<?php
    header('Content-type: application/json');
    $status = array(
        'type'=>'success',
        'message'=>'Thank you for contacting us. We will contact you as early as possible.  '
    );
    $firstName = @trim(stripslashes($_POST['first_name']));
    $lastName = @trim(stripslashes($_POST['last_name']));
   $email = @trim(stripslashes($_POST['work_email']));
   $companySize = @trim(stripslashes($_POST['company_size']));
   $phone = @trim(stripslashes($_POST['contact-no']));
    $message = @trim(stripslashes($_POST['requirments']));

$email_from = $email;
$email_to = 'twinkle.bhardwaj@opstree.com';

$body = 'First Name: ' . $firstName . "\n\n" . 'Last Name: ' . $lastName . "\n\n" . 'Email: ' . $email . "\n\n" . 'Company Size: ' . $companySize . "\n\n" . 'Phone: ' . $phone . "\n\n" . 'Message: ' . $message . "\n\n";

$success = @mail($email_to, $phone, $body, 'From: <'.$email_from.'>');

echo json_encode($status);

?>

