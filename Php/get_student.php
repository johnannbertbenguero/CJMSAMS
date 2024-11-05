<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'cjmi_sams_db';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if 'grade' is set in the URL parameters
if (isset($_GET['grade'])) {
    $gradeLevel = $_GET['grade'];
    
    $sql = "SELECT student_id, first_name, last_name, parent_phone_number FROM students WHERE grade_level = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $gradeLevel);
    $stmt->execute();
    $result = $stmt->get_result();

    $students = [];
    while ($row = $result->fetch_assoc()) {
        $students[] = $row;
    }

    echo json_encode($students);

    $stmt->close();
} else {
    echo json_encode(["error" => "Grade level not specified"]);
}

$conn->close();
?>
