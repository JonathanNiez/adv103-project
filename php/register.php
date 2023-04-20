<?php
require 'connect.php';
header("Access-Control-Allow-Origin *");
header('Content-type: application/json');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);

  $Firstname = $request->Firstname;
  $Lastname = $request->Lastname;
  $Username = $request->Username;
  $Email = $request->Email;
  $Password = $request->Password;
  $sql = "INSERT INTO user (Firstname, Lastname, Username, Email, Password) VALUES ('$Firstname','$Lastname','$Username','$Email', '$Password')";
  if (mysqli_query($conn, $sql)) {
    http_response_code(201);
  } else {
    http_response_code(422);
  }
}