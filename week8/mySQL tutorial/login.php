<?php
include "dbconnect.php";
session_start();

if (isset($_POST['user_name']) && isset($_POST['password'])) {
    $user_name = $_POST['user_name'];
    $password = $_POST['password'];
    $hashedpassword = md5($password);

    //query data
    $query = 'SELECT * FROM registration ' .
             "WHERE user_name='$user_name' " .
             "AND password='$hashedpassword'";

    $result = $conn->query($query);


    //ensuring data exist in table
    if ($result->num_rows > 0) {
        $_SESSION['valid_user'] = $user_name;
    } else {
        echo 'User does not exist in the database.';
    }

    $conn->close();
}
?>
<html>

<body>
    <h1>Homepage</h1>
    <?php
    if (isset($_SESSION['valid_user'])) {
        echo 'You are logged in as: ' . $_SESSION['valid_user'] . '<br />';
        echo '<a href="logout.php">log out here</a><br />';
    } else {
        if (isset($user_name)) {
            echo 'Could not log you in.<br />';
        } else {
            echo 'You are not logged in.<br />';
        }
    }
?>
</body>

</html>