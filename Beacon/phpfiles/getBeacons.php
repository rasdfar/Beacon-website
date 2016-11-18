<?php
//database settings
$connect = mysqli_connect("mysli.oamk.fi", "t4toan00", "", "opisk_t4toan00");

//$connect = mysqli_connect("localhost", "admin", "root", "beaconapp");

$result = mysqli_query($connect, "select * from beacons");

$data = array();
//$data = {};

while ($row = mysqli_fetch_array($result)) {
	$row_array['id_beacon'] = $row['id_beacon'];
	$row_array['name'] = $row['name'];
	$row_array['id_name'] = str_replace(' ', '_', $row['name']);
	$row_array['author'] = $row['author'];
	$row_array['year'] = $row['year'];
	$row_array['description'] = $row['description'];
	
	array_push($data, $row_array);
  	$print['object'][] = $data;
}
	//echo $print[];
    print json_encode($data);
?>