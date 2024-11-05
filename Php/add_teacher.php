<?php
$host = 'localhost';
$port = 3306;
$db_name = 'cjmi_sams_db';
$db_user_name = 'root';
$db_user_pass = '';

$conn = new mysqli($host, $db_user_name, $db_user_pass, $db_name, $port);

if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $conn->connect_error]));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $facultyNumber = $conn->real_escape_string($_POST['facultyNumber']);
    $lastName = $conn->real_escape_string($_POST['lastName']);
    $firstName = $conn->real_escape_string($_POST['firstName']);
    $contactNumber = $conn->real_escape_string($_POST['contactNumber']);
    $emailAddress = $conn->real_escape_string($_POST['emailAddress']);
    $gradeLevel = $conn->real_escape_string($_POST['gradeLevel']);

    $sql = "INSERT INTO teachers (facultyNumber, lastName, firstName, contactNumber, emailAddress, gradeLevel)
            VALUES ('$facultyNumber', '$lastName', '$firstName', '$contactNumber', '$emailAddress', '$gradeLevel')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['status' => 'success', 'message' => 'Teacher added successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error adding teacher: ' . $conn->error]);
    }
}

$conn->close();
?>
