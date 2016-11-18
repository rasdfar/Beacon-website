<?php
include"connection.php";
//get pw and email from js
//compare to database data
//if same retunrn true
//if not return false
$email=$_POST['email'];
$password=$_POST['password'];

$sql = "select password from users where email = '$email';";			//ask table from database
$result = $conn->query($sql);
if ($result->num_rows > 0) {
	 $data = Array();
     while($row = $result->fetch_assoc()) { 
		 $data[] = $row["password"];
     }
	 $pw = $data[0];
	 if($password == $pw){
		 echo "true";
	 }
	 else{echo "false";}
} else {
     echo "false";
}
$conn->close();
?>