<?php

$conn = new mysqli('localhost', 'root', '', 'login_sameple_db');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
