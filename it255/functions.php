<?php
include("config.php");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
     die();
}

function checkIfLoggedIn(){
    global $conn;
    if(isset($_SERVER['HTTP_TOKEN'])){
        $token = $_SERVER['HTTP_TOKEN'];
        $result = $conn->prepare("SELECT * FROM users WHERE token=?");
        $result->bind_param("s",$token);
        $result->execute();
        $result->store_result();
        $num_rows = $result->num_rows;
        if($num_rows > 0)
        {
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

function login($username, $password){
    global $conn;
    $rarray = array();
    if(checkLogin($username,$password)){
        $id = sha1(uniqid());
        $result2 = $conn->prepare("UPDATE users SET token=? WHERE username=?");
        $result2->bind_param("ss",$id,$username);
        $result2->execute();
        $rarray['token'] = $id;
    } else{
        header('HTTP/1.1 401 Unauthorized');
        $rarray['error'] = "Invalid username/password";
    }
    return json_encode($rarray);
}

function checkLogin($username, $password){
    global $conn;
    $password = md5($password);
    $result = $conn->prepare("SELECT * FROM users WHERE username=? AND password=?");
    $result->bind_param("ss",$username,$password);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if($num_rows > 0)
    {
        return true;
    }
    else{
        return false;
    }
}

function register($username, $password, $firstname, $lastname){
    global $conn;
    $rarray = array();
    $errors = "";
    if(checkIfUserExists($username)){
        $errors .= "Username already exists\r\n";
    }
    if(strlen($username) < 5){
        $errors .= "Username must have at least 5 characters\r\n";
    }
    if(strlen($password) < 5){
        $errors .= "Password must have at least 5 characters\r\n";
    }
    if(strlen($firstname) < 3){
        $errors .= "First name must have at least 3 characters\r\n";
    }
    if(strlen($lastname) < 3){
        $errors .= "Last name must have at least 3 characters\r\n";
    }
    if($errors == ""){
        $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, username, password) VALUES (?, ?, ?, ?)");
        $pass =md5($password);
        $stmt->bind_param("ssss", $firstname, $lastname, $username, $pass);
        if($stmt->execute()){
            $id = sha1(uniqid());
            $result2 = $conn->prepare("UPDATE users SET token=? WHERE username=?");
            $result2->bind_param("ss",$id,$username);
            $result2->execute();
            $rarray['token'] = $id;
        }else{
            header('HTTP/1.1 400 Bad request');
            $rarray['error'] = "Database connection error";
        }
    } else{
        header('HTTP/1.1 400 Bad request');
        $rarray['error'] = json_encode($errors);
    }

    return json_encode($rarray);
}

function checkIfUserExists($username){
    global $conn;
    $result = $conn->prepare("SELECT * FROM users WHERE username=?");
    $result->bind_param("s",$username);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if($num_rows > 0)
    {
        return true;
    }
    else{
        return false;
    }
}

function addCar($series, $year){
    global $conn;
    $rarray = array();
    $errors = "";
    if($errors == ""){
        $stmt = $conn->prepare("INSERT INTO cars (series, year) VALUES (?, ?)");
        $stmt->bind_param("ss", $series, $year);
        $stmt->execute();
    } else{
        header('HTTP/1.1 400 Bad request');
        $rarray['error'] = json_encode($errors);
    }

    return json_encode($rarray);
}

function deleteCar($id){
    global $conn;
    $rarray = array();
    if(checkIfLoggedIn()){
        $result = $conn->prepare("DELETE FROM cars WHERE id=?");
        $result->bind_param("i",$id);
        $result->execute();
        $rarray['success'] = "Deleted successfully";
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
    }
    return json_encode($rarray);
}

function buyCar($firstname, $lastname, $series, $year){
    global $conn;
    $rarray = array();
    $errors = "";
    if($errors == ""){
        $stmt = $conn->prepare("INSERT INTO store (firstname, lastname, series, year) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss",$firstname, $lastname, $series, $year);
        $stmt->execute();
    } else{
        header('HTTP/1.1 400 Bad request');
        $rarray['error'] = json_encode($errors);
    }

    return json_encode($rarray);
}

 ?>