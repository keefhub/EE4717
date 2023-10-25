<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the new price and the price ID from the form data
    $newPrice = $_POST["newPrice"];
    $priceId = $_POST["priceId"];

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

    // Prepare and execute a SQL update query
    $sql = "UPDATE coffeeprice SET price = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("di", $newPrice, $priceId);
    $stmt->execute();
    $stmt->close();
    $conn->close();

    // Send a response to the client
    echo "Price updated successfully";
} else {
    // Handle other HTTP request methods, if necessary
    echo "Invalid request";
}
