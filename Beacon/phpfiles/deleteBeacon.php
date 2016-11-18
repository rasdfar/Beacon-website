<?php
//$connect = mysqli_connect("localhost", "admin", "root", "beaconapp");
$connect = mysqli_connect("mysli.oamk.fi", "t4toan00", "", "opisk_t4toan00");

$id_beacon = $_GET['id_beacon'];
$query = "DELETE FROM `beacons` WHERE id_beacon='".$id_beacon."';";

//print($query);

$result = mysqli_query($connect, $query);

$resultdata = array();

while ($row = mysqli_fetch_array($result)) {
	
}
	//echo $print[];
	
    print $result;
?>