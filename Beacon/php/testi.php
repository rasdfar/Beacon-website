<?php
include"connection.php";
//$unit_id= $_POST['id'];		//this comes from .js file and its value is selected unit value from dropbox
$sql = "select htun from henk;";			//ask table from database
$result = $conn->query($sql);
if ($result->num_rows > 0) {
	 $data = Array();
     while($row = $result->fetch_assoc()) { 
		 $data[] = $row["htun"];				//sets humidity to array
     }
	 print  json_encode($data, JSON_NUMERIC_CHECK);
} else {
     echo "0 results";
}
$conn->close();
?>  