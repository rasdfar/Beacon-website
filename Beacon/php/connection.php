<?php
//connection info you know what to do
$servername = "mysli.oamk.fi";
$username = "t2kaja04";
$password = "";
$dbname = "opisk_t2kaja04";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
} 
?>