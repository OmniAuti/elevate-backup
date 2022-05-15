<?php

$firstName = $_POST["first-name"];
$lastName = $_POST["last-name"];
$title = $_POST["title"];
$email = $_POST["email"];
$businessName = $_POST["business-name"];
$country = $_POST["country"];
$yearsInBusiness = $_POST["years-in-business"];
$businessAddress = $_POST["business-address"];
$websiteURL = $_POST["website-url"];
$comments = $_POST["comments"];


    $to = "Austin@austinolijar.com";
    $headers = "New Contact Us Form Submission";
    $txt = "Message from ".$firstName."and thats all";
            
    mail($to, "New Contact Form Submission", $txt);
?>
