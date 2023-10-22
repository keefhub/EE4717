<?php

include"dbconnect.php";
$user_name = $_POST['user_name'];
$password = $_POST['password'];
$password = md5($password);


$stmt = $conn->prepare("insert into registration(user_name, password) values(?, ?)");
//i - int, d - double, s -string, b - blob
$stmt->bind_param("ss", $user_name, $password);
$stmt->execute();
echo "Registration successfully...";
$stmt->close();
$conn->close();
