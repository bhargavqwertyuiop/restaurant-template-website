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

// Check if the registration form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data from registration form
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Insert data into registration table
    $query = "INSERT INTO register (username, email, password) VALUES ('$username', '$email', '$password')";
    $result = mysqli_query($connection, $query);

    if ($result) {
        header("Location: login.html");
    } else {
        echo "Error: " . mysqli_error($connection);
    }
}

// Close the database connection
mysqli_close($connection);
?>
