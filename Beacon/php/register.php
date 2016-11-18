<?php
include"connection.php";
//email and password from js
//write them to db
$email=$_POST['email'];
$password=$_POST['password'];

$sql = "insert into users values('$email','$password');";

if ($conn->query($sql) === TRUE) {
    echo "Success";
} else {
    echo "Email already on use";
}

$conn->close();
?>