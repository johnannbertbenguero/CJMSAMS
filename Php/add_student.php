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
    $gradeLevel = $_POST['grade_level'];
    $guardianContactNumber = $_POST['guardian_contact_number'];

    $stmt = $conn->prepare("INSERT INTO students (first_name, last_name, grade_level, parent_phone_number) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstName, $lastName, $gradeLevel, $guardianContactNumber);

    if ($stmt->execute()) {
        echo "New student added successfully";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}

$conn->close();
?>
