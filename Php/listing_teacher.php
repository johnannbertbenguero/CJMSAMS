<?php 
session_start();
include "cjmi_sams_db.php";

// Query to fetch only specific roles
$rolesToInclude = ["Teacher",];
$rolesString = "'" . implode("','", $rolesToInclude) . "'";
$sql = "SELECT * FROM users WHERE role IN ($rolesString)";
$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row; // Collect each filtered row in an array
    }
}

// Encode data as JSON and output
header('Content-Type: application/json');
echo json_encode($data);

// Close the connection
$conn->close();
?>