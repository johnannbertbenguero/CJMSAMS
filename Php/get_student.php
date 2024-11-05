<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'cjmi_sams_db';

// Debug: Check database connection
$conn = new mysqli($servername, $username, $password, $dbname);

ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($conn->connect_error) {
    die("Database Connection failed: " . $conn->connect_error); // Debug: Log connection error
}

// Debug: Check if 'grade' is set
if (isset($_GET['grade'])) {
    $gradeLevel = $_GET['grade'];
    echo "Grade level parameter: " . $gradeLevel; // Debug: Check grade parameter value

    $sql = "SELECT student_id, first_name, last_name, parent_phone_number FROM students WHERE grade_level = ?";
    $stmt = $conn->prepare($sql);

    // Debug: Check SQL preparation
    if (!$stmt) {
        die("SQL preparation error: " . $conn->error); // Debug: Log preparation error
    }

    $stmt->bind_param("s", $gradeLevel);
    $stmt->execute();
    $result = $stmt->get_result();

    $students = [];
    while ($row = $result->fetch_assoc()) {
        $students[] = $row;
    }

    // Debug: Check final JSON data before sending
    echo json_encode($students);

    $stmt->close();
} else {
    echo json_encode(["error" => "Grade level not specified"]); // Debug: Missing grade level
}

$conn->close();
?>
