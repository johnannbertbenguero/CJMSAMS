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

// Query to get all teacher records with role 'teacher'
$sql = "SELECT user_id, last_name, first_name, advisory_class, phone_number, email FROM users WHERE role = 'teacher'";
$result = $conn->query($sql);

$users = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

echo json_encode(['status' => 'success', 'data' => $users]);

$conn->close();
?>
