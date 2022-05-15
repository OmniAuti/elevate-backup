<?php


    $to = "austin@austinolijar.com";   
	$firstName = $_POST['firstName'];
    
    mail($to, "New Contact Form Submission", $firstName);


    header("Location: http://thisisatesttesttest.com/mail-sent");

    exit();

?>