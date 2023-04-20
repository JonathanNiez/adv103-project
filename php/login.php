<?php
require "connect.php";
header("Access-Control-Allow-Origin *");
header('Content-type: application/json');
header('Access-Control-Allow-Methods:POST');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);

  $Email = $request->Email;
  $Password = $request->Password;
  $sql = "SELECT * FROM user WHERE Email = '$Email' AND Password = '$Password'";
  $result = mysqli_query($conn, $sql);
  if ($result) {
    $emailCheck = mysqli_num_rows($result);
    $rows = mysqli_fetch_array($result);

    if ($emailCheck >= 1){

      http_response_code(200);
      
      $data = "";

       $data .= '{"Email":"' . $rows["Email"] . '",';
       $data .= '"Username":"' . $rows["Username"] . '",';
       $data .= '"Firstname":"' . $rows["Firstname"] . '",';
       $data .= '"Lastname":"' . $rows["Lastname"] . '",';
     echo  $data .= '"Status":"200"}';

    }

  } else {
    http_response_code(422);
    echo("Error description: " . mysqli_error($conn));
  }
}

