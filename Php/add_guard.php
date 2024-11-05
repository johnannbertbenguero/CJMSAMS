<?php
$servername = 'localhost'; 
$username = 'root'; 
$password = ''; 
$dbname = 'cjmi_sams_db';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['first_name'];
    $lastName = $_POST['last_name'];
    $email = $_POST['email'];
    $ContactNumber = $_POST['phone_number'];  // Corrected to match JavaScript

    // Set default values for guard role and password
    $role = "guard";
    $password = "password";  // Consider hashing this for security

    $stmt = $conn->prepare("INSERT INTO users (first_name, last_name, email, password, role, phone_number) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $firstName, $lastName, $email, $password, $role, $ContactNumber);
    
    if ($stmt->execute()) {
        echo "New guard added successfully";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}

$conn->close();
?>
