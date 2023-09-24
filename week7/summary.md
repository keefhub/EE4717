# this week PHP will be covered

## Syntax

    embedding javascript in php

    <?php echo '<script type = "text/javascript"> alert(".."); </script>'; ?>

    echo == print

    .date('H:i, jS F Y'), H: 24h format, i: minute j: day of the month, S: 'th', F: full name of month, Y: year

    "." concatenates

## Array

    array('element1', 'element2', 'element3')

    foreach ($product as $current) { //access keys in an array
        <action>
    } : this assigns value of each element in $product[] to $current and the array pointer moves by one till the end of the array.

    $prices = array('Tires' => 100, 'Oil' => 10) just like dictionary in python.
    foreach ($prices as $keys => $value){
        echo $key."-"$value."</br>";
    }

    2-D Array:
    $products = array(array('TIR', 'Tires', 100), array('OIL', 'Oil', 10))
    to access the array, we use nested loop.
    for ($row=0; $row<3; $row++) {
        for ($column=0; $column<3; $column++) {
            echo $products[$row][$column]
        }
    }

    sort($var)

## Defining variables

to define variable: $<var>, $_post['var'], $HTTP_POST_VARS['var'], "$\_post['var']" is more recommended

    $tireqty = $_POST['tireqty']
    echo '$tireqty.tires<br />' will not be printed out. requires double quote "$tireqty.tires<br />"
    GET displays data on url-link

to define constants

    Define ('TIREPRICE', 100)
    echo TIREPRICE, do not need $

### 1. Superglobal variable: visible everywhere

    $_GET: passed to the script via GET method
    $_POST: passed to the script via POST method
    $_GLOBALS
    $_SERVER
    $_COOKIES
    $_FILES
    $_ENV
    $_REQUEST: array of all user input including contents of $_GET, $_POST, and $_COOKIE (not including $_FILE)
    $_SESSION

2. Constants: visible globally
3. Global variables: defined outside a function, visible throughout the script
4. Variables in function: declared as 'global'

   function example ():
   global $x = 10

5. Variables in function: declared as 'static'

   function example ():
   static $x = 10

6. Variables in function: declared as 'local'

## Type Casting

    $totalqty = 0;
    $totalamount = (float) $totalqty;

or

    $varname = 'tireqty';
    $$varname = 5; === $tireqty = 5;

## Functions

    function_name() {

    } // same as javascript

Passing by values

    function increment ($value, $amount=1) {
        $value += $amount
    }

Passing by reference

    function increment (&$value, $amount=1){
        $value += $amount
    }

isset() : tell if a var is created and a given a value
