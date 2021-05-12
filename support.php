<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'contact@matthewstevens.me';

    $email_subject = "Contact from $email";

    $email_body = "Name: $name. \n". "Email: $email.\n"."Message: $message.\n";

    $to = "matthew.stevens@matthewstevens.me";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    echo "<script>alert('Sent');</script>";
    header("Location: index.html");
?>