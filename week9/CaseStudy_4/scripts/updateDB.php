<?php

$connection = mysqli_connect('localhost', 'root', '', 'f35ee');

if (!$connection) {
    die('Could not connect: ' . mysqli_connect_error());
}

//declaring global variable
$regular = $_GET['regular'];
$smallCafe = $_GET['smallCafe'];
$largeCafe = $_GET['largeCafe'];
$smallCappucino = $_GET['smallCappucino'];
$largeCappucino = $_GET['largeCappucino'];

//update if price != 0
if($regular != 0) {
    $sql = "UPDATE f35ee.products SET price = $regular WHERE id = 1";
    mysqli_query($connection, $sql);
}

if($smallCafe != 0) {
    $sql = "UPDATE f35ee.products SET price = $smallCafe WHERE id = 2";
    mysqli_query($connection, $sql);
}

if($largeCafe != 0) {
    $sql = "UPDATE f35ee.products SET price = $largeCafe WHERE id = 3";
    mysqli_query($connection, $sql);
}

if($smallCappucino != 0) {
    $sql = "UPDATE f35ee.products SET price = $smallCappucino WHERE id = 4";
    mysqli_query($connection, $sql);
}

if($largeCappucino != 0) {
    $sql = "UPDATE f35ee.products SET price = $largeCappucino WHERE id = 5";
    mysqli_query($connection, $sql);
}

mysqli_close($connection);
