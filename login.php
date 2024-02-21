<?php
// Database credentials
$servername = "localhost"; // or your server address
$username = "root"; // your database username
$password = ""; // your database password
$database = "new_db"; // your database name

// Create connection
$connection = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if the login form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data from login form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check login credentials
    $loginQuery = "SELECT * FROM register WHERE username='$username' AND password='$password'";
    $loginResult = mysqli_query($connection, $loginQuery);

    if (mysqli_num_rows($loginResult) > 0) {
       
        // Redirect the user to a welcome page or dashboard
        header("Location: index.html");
    } else {
        header("Location: login.html?error=invalid");
        exit;
    }
}

// Close the database connection
mysqli_close($connection);
?>
