<?php
session_start();
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = array();
}

if (!isset($_GET['buy'])) {
    $_SESSION['cart'][] = $_GET['buy'];
    header('Location: ' . $_SERVER['PHP_SELF'] . '?' . SID);
    exit();
}

$items = array(
    'Canadian Australian Dictionary',
    'As-new parachute (never opened)',
    'Songs of the Goldfish (2CD set)',
    'Ending PHP4 (O\'Reilly)'
);
$prices = array(24.95, 1000, 19.99, 39.95);

$total = 0;
?>

<html>
<head>
    <title>Product Catalogue</title>
</head>
<body>
    <p>Your shopping cart contains <?php echo count($_SESSION['cart']); ?> items.</p>
    <p><a href="cart.php">View your cart</a></p>

    <table border="1">
        <thead>
            <tr>
                <th>Item description</th>
                <th>Price</th>
                <th>Add to Cart</th>
            </tr>
        </thead>
        <tbody>
            <?php
            for ($i = 0; $i < count($_SESSION['cart']); $i++) {
                echo

'<tr>';
                echo

'<td>' . $items[$_SESSION['cart'][$i]] . '</td>';
                echo

'<td align= "right"> $';
                echo number_format(
                    $prices[$_SESSION['cart'][$i]],
                    2
                );
                echo

'</td>';
                echo '<td align= "center">';
                echo '<a href="' . $_SERVER['PHP_SELF'] . '?buy=' . $i . '">';
                echo '<img src="./cart.png" width=20/></a>';
                echo '</td>';
                echo '</tr>';

                $total += $prices[$_SESSION['cart'][$i]];
            }
?>
        </tbody>
    </table>

    <p>all prices are in imaginary dollars</p>
</body>
</html>