<?php
//database settings

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);


//$connect = mysqli_connect("localhost", "admin", "root", "beaconapp");
$connect = mysqli_connect("mysli.oamk.fi", "t4toan00", "", "opisk_t4toan00");

$query = "UPDATE `beacons` SET `name`='".$data->name."', `author`='".$data->author."', `year`='".$data->year."', `description`='".$data->description."', `image_url`='".$data->image_url."', `showroom`='".$data->showroom."' WHERE `id_beacon`='".$data->id_beacon."'; ";

print($query);
$result = mysqli_query($connect, $query);


while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
}
	
    //print ($data);

?>