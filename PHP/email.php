<?

    $mattemail = 'mattandbucs@gmail.com';
	$erinemail = 'eebeard07@gmail.com';

	$to = $email;
	$subject = 'Beard-Johnson Wedding';
	
	$headers = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/html; charset=iso-8859-1' . "\r\n" . 	'From: Matt and Erin <thejohnsons@beardjohnsonwedding.com>' . "\r\n" . 	'Cc: mattandbucs@gmail.com, eebeard07@gmail.com' . "\r\n";

	if($accept === 'accept') {
		$message = "
		<html>
		<head>
		<title>Matt and Erin's Wedding</title>
		</head>
		<body>
            <div>
                <img src='http://www.beardjohnsonwedding.com/images/mail.accepted.png' alt='accepted-image' width='500px'>
            </div>
		</body>
		</html>
		";
	}else {
		$message = "
		<html>
		<head>
		<title>Matt and Erin's Wedding</title>
		</head>
		<body>
            <img src='http://www.beardjohnsonwedding.com/images/mail.declined.png' alt='accepted-image' width='500px'>
		</body>
		</html>
		";
	}

	/*$message = "This is a message!";*/

	mail($to,$subject,$message,$headers);

?>