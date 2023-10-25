<?php

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

// Query to fetch coffee prices
$sql = "SELECT ID, price FROM coffeeprice";

$result = $conn->query($sql);

// Create an array to store the results
$prices = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $prices[] = $row;
    }
}

// Close the database connection
$conn->close();

// Send the prices as JSON
header('Content-Type: application/json');
echo json_encode($prices);
