<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN'); //mozda nije ovako
include("functions.php");


if(isset($_POST['series']) && isset($_POST['year'])){

  $series = $_POST['series'];
  $year = $_POST['year'];
 
  echo addCar($series,$year);

}
?>