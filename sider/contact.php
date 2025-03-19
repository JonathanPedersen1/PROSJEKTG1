<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Databasetilkobling

    $conn = new mysqli('localhost','root','','bruker');
    if($conn->connect_error){
        die('Tilkobling Mislyktes : '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into bruker (name, email, subject, message)
        values(?,?,?,?)");
        $stmt -> bind_param("ssss", $name, $email, $subject, $message);
        $stmt -> execute();
        echo "Melding sendt!";
        $stmt->close();
        $conn->close();
    }
    
?>