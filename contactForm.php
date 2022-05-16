<?php


    $to = "austin@austinolijar.com";   
	$firstName = $_POST["first-name"];
	$lastName = $_POST["last-name"];
    $title = $_POST["title"];
    $email = $_POST["email-true"];
    $businessName = $_POST["business-name"];
    $country = $_POST["country"];
    $businessYears = $_POST["years-in-business"];
    $businessAddress = $_POST["business-address"];
    $websiteURL = $_POST["website-url"];
    $productInquiry = $_POST["products"];
    $comments = $_POST["comments"];
    
    if(!empty($_POST['email'])) die();

    $products = json_encode($productInquiry);
	
	$txt = "A new inquiry from Elevate Oral Care's International Site. The following information was submitted. \n\n First Name: $firstName \n Last Name: $lastName \n Title: $title \n Email: $email \n Business Name: $businessName \n Country: $country \n Years In Business: $businessYears \n Business Address: $businessAddress \n Website: $websiteURL \n $products \n Comments: $comments";
	
    $contactFrom = "From: Elevate Oral Care International Inquiry";
    
    mail($to, "New Contact Form Submission", $txt, $contactFrom);


    header("Location: http://thisisatesttesttest.com/#/mail-sent");

    exit();

?>