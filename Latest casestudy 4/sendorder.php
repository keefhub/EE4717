<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the new price and the price ID from the form data
    $jjquantity = $_POST["justjavaqty"];
    if (isset($_POST["cafeaulait"])) {
        $caltype = $_POST["cafeaulait"];
    }
    else {
        $caltype = 0;
    }
    $calqty = $_POST["cafeaulaitqty"];
    if (isset($_POST["icedcappucino"])) {
        $captype = $_POST["icedcappucino"];
    }
    else {
        $captype = 0;
    }
    $capqty = $_POST["icedcappucinoqty"];

    // Perform the necessary database or server-sIDe operations to update the price
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
    
    $realcal1type = 0;
    $realcal2type = 0;
    $realcap1type = 0;
    $realcap2type = 0;

    // Query to fetch coffee prices
    $sql1 = "SELECT ID, price FROM coffeeprice";

    $result = $conn->query($sql1);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            if ($row["ID"] == 2) {
                $realcal1type = $row["price"];
            }
            else if ($row["ID"] == 3) {
                $realcal2type = $row["price"];
            }
            else if ($row["ID"] == 4) {
                $realcap1type = $row["price"];
            }
            else if ($row["ID"] == 5) {
                $realcap2type = $row["price"];
            }
        }
    }

    if ($caltype == $realcal1type) {
        $cal1 = $calqty;
    } elseif ($caltype == $realcal2type) {
        $cal2 = $calqty;
    }

    if ($captype == $realcap1type) {
        $cap1 = $capqty;
    } elseif ($captype == $realcap2type) {
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
    echo "Order sent.";
} else {
    // Handle other HTTP request methods, if necessary
    echo "InvalID request";
}
