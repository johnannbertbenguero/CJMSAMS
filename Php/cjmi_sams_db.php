<?php

// Database connection
$host = 'localhost'; 
$port = 3306;
$db_name = 'cjmi_sams_db';
$db_user_name = 'root'; 
$db_user_pass = ''; 

// Create MySQLi connection
$conn = new mysqli($host, $db_user_name, $db_user_pass, $db_name, $port);

// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Set the charset to utf8mb4
if (!$conn->set_charset('utf8mb4')) {
    die('Error setting charset: ' . $conn->error);
}

echo "Connected successfully";
?>
