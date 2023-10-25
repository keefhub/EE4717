<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the new price and the price ID from the form data
    $jjquantity = $_POST["justjavaqty"];
    $caltype = $_POST["cafeaulait"];
    $calqty = $_POST["cafeaulaitqty"];
    $captype = $_POST["icedcappucino"];
    $capqty = $_POST["icedcappucinoqty"];

    // Perform the necessary database or server-side operations to update the price
    // Example: Update the price in a database
    // Replace these lines with your database logic
    $dbHost = "localhost";
    $dbUser = "root";
    $dbPass = "";
    $dbName = "casestudy4";

    $conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $cal1 = 0;
    $cal2 = 0;
    $cap1 = 0;
    $cap2 = 0;

    if ($caltype == 2.0) {
        $cal1 = $calqty;
    } elseif ($caltype == 3.0) {
        $cal2 = $calqty;
    }

    if ($captype == 4.75) {
        $cap1 = $capqty;
    } elseif ($captype == 5.75) {
        $cap2 = $capqty;
    }


    // Prepare and execute a SQL update query
    $sql = "INSERT INTO orders (jj, calsingle, caldouble, capsingle, capdouble) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iiiii", $jjquantity, $cal1, $cal2, $cap1, $cap2);
    $stmt->execute();
    $stmt->close();
    $conn->close();

    // Send a response to the client
    echo "Price updated successfully";
} else {
    // Handle other HTTP request methods, if necessary
    echo "Invalid request";
}
