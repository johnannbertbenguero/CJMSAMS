<?php
// session_start();
// include "cjmi_sams_db.php";

// if (isset($_POST['email']) && isset($_POST['password'])) {
//     function validate($data) {
//         $data = trim($data);
//         $data = stripslashes($data);
//         $data = htmlspecialchars($data);
//         return $data;
//     }

//     $email = validate($_POST['email']);
//     $password = validate($_POST['password']);

//     // Check for empty fields
//     if (empty($email)) {
//         header("Location: ../php/Login.php?error=Email is required");
//         exit();
//     } elseif (empty($password)) {
//         header("Location: ../php/Login.php?error=Password is required");
//         exit();
//     }

//     // Use prepared statements to prevent SQL injection
//     $stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
//     $stmt->bind_param("s", $email);
//     $stmt->execute();
//     $result = $stmt->get_result();

//     if ($result->num_rows === 1) {
//         $row = $result->fetch_assoc();

//         // Use password_verify to check hashed password (if passwords are hashed)
//         if (password_verify($password, $row['password'])) {
//             // Successful login
//             $_SESSION['email'] = $row['email'];
//             $_SESSION['name'] = $row['name'];
//             $_SESSION['id'] = $row['id'];
//         }
//         //     // Redirect based on role
//         //     $role = $row['role']; // Assuming role is a column in your database
//         //     if ($role === 'Admin') {
//         //         header("Location: ../HTML/SuperAdmin_Dashboard.php");
//         //     } elseif ($role === 'Teacher') {
//         //         header("Location: ../HTML/TeacherDashboard.php");
//         //     } elseif ($role === 'Guard') {
//         //         header("Location: ../HTML/Qrcode_scanner.php");
//         //     }
//         //     exit();
//         //} 
//         else {
//             // Incorrect password
//             header("Location: ../HTML/Login.php?error=Incorrect password");
//             exit();
//         }
//     } else {
//         // Email not found
//         header("Location: ../HTML/Login.php?error=Email does not exist");
//         exit();
//     }
// } else {
//     header("Location: ../HTML/Login.php?error=Please enter both email and password");
//     exit();
// }


session_start();
include "cjmi_sams_db.php";

if (isset($_POST['email']) && isset($_POST['password'])) 
{
    function validate($data) 
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;  // Fixed variable name
    }

    $email = validate($_POST['email']);
    $password = validate($_POST['password']);

    // if (empty($email)) 
    // {
    //     header("Location: Login.php?error=email is required");
    //     exit();
    // } 
    
    // elseif (empty($password)) 
    // {
    //     header("Location: Login.php?error=Password is required");
    //     exit();
    // }

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE email=? AND password=?");
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) 
    {
        $row = $result->fetch_assoc();
        if ($row['email'] === $email && $row['password'] === $password) 
        {
            // Successful login
            $_SESSION['email'] = $row['email'];
            $_SESSION['last_mame'] = $row['last_name'];
            $_SESSION['user_id'] = $row['user_id'];
            // echo "Session variables set: " . $_SESSION['last_name'] . ", " . $_SESSION['user_id']; // Debug line
            // header("Location: ../HTML/SuperAdmin_Dashboard.php");
            // exit();
            // Redirect based on role
            $role = $row['role']; // Assuming role is a column in your database
            if ($role === 'Admin') {
                header("Location: ../HTML/SuperAdmin_Dashboard.php");
            } elseif ($role === 'Teacher') {
                header("Location: ../HTML/TeacherDashboard.php");
            } elseif ($role === 'Guard') {
                header("Location: ../HTML/Qrcode_scanner.php");
            }
            exit();
        }
        else 
        {
            // Incorrect password
            header("Location: ../HTML/Login.php?error=Incorrect password");
            exit();
        }
    } 
    else {
        // Email not found
        header("Location: ../HTML/Login.php?error=Email does not exist");
        exit();
    }
}

    // } else {
    //     header("Location: ../HTML/Login.php?error=Please enter both email and password");
    //     exit();
    // }
?>