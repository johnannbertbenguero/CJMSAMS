<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Christ Jezus Montessori School Inc. Student Attendance Monitoring System</title>
    <link rel="icon" href="../Images/CJMS.png" type="image/png">
    <link rel="stylesheet" href="../Css/SuperAdmin_Dashboard.css">
</head>
<body>
            <!-- Header -->
    <div class="header">
        <div class="title">Dashboard</div>
        <div class="admin-name">Admin Name</div>
        <div class="menu-container">
            <div class="menu-icon" onclick="toggleMenu()">&#9776;</div> <!-- Hamburger Menu Icon -->
            <div class="menu">
                <a href="Change_password.php" class="Change_password">Change Password</a>
                <a href="Login.php" class="logout">Logout</a>
            </div>
        </div>
    </div>

    <main class="dashboard-container">
      <a href="SA_Teachers.php" class="card-link">
        <div class="module-card">
        Teachers
        </div>
      </a>
      <a href="SA_Students.php" class="card-link">
        <div class="module-card">
        Students
        </div>
      </a> <a href="SA_Guard.php" class="card-link">
        <div class="module-card">
        Guard
        </div>
      </a>
      </main>
    
      <footer>
        <p>&copy; 2024 Students Attendance Monitoring System</p>
      </footer>

      <script src="../Javascript/Menu_bar.js"></script>
</body>
</html>
