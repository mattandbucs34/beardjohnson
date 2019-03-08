<?php
	$servername = "localhost";
	$username = "mattandbucs32";
	$password = "23#Coolidge@92";
	$dbname = "eandmwedding";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
    		die("Connection failed: " . $conn->connect_error);
	}

	// sql to create table
	$sql = "CREATE TABLE IF NOT EXISTS weddingguests (
	id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	firstname VARCHAR(255) NOT NULL,
	lastname VARCHAR(255) NOT NULL,
	email VARCHAR(255),
	accept VARCHAR(255),
	partynum SMALLINT,
	dietneeds VARCHAR(255),
	songreq VARCHAR(255),
	reg_date VARCHAR(255)
	)";

	if ($conn->query($sql) === TRUE) {
    		/*echo "Table weddingguests created successfully";*/
	} else {
    		echo "Error creating table: " . $conn->error;
	}

$dietneeds = "";
foreach($_POST['dietneeds'] as $x => $diet) {
	$dietneeds .= $diet . ", ";
}

		$fname = trim(mysqli_real_escape_string($conn,$_POST['fname']));
		$lname = trim(mysqli_real_escape_string($conn,$_POST['lname']));
		$email = trim($_POST['email']);
		$accept = $_POST['rsvp'];
		if($accept === 'accept') {
			$guestnum = $_POST['guestnum'];
		}else {
			$guestnum = 0;
		}
		
		$songreq = mysqli_real_escape_string($conn, $_POST['songreq']);
		$timestamp = date('m-d-Y');

	$insertSQL = "INSERT INTO `weddingguests` (`firstname`, `lastname`, `email`, `accept`, `partynum`, `dietneeds`, `songreq`, `reg_date`) VALUES ('$fname', '$lname', '$email', '$accept', '$guestnum', '$dietneeds', '$songreq', '$timestamp')";

if ($conn->query($insertSQL) === TRUE) {
    echo "New record created successfully";
	//header("Location: index.html");
} else {
    echo "Error: " . $insertSQL . "<br>" . $conn->error;
}

$conn->close();


include 'email.php';
	
?>
