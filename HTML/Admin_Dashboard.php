<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Christ Jezus Montessori School Inc. Student Attendance Monitoring System</title>
    <link rel="icon" href="../Images/CJMS.png" type="image/png">
    <link rel="stylesheet" href="../CSS/Admin_Dashboard.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> <!-- Chart.js CDN -->
</head>
<body>
    <!-- Header -->
    <div class="header">
        <div class="title">Dashboard</div>
        <div class="admin-name">Admin Name</div>
        <div class="menu-container">
            <div class="menu-icon" onclick="toggleMenu()">&#9776;</div>
            <div class="menu">
                <a href="Change_password.php" class="Change_password">Change Password</a>
                <a href="Login.php" class="logout">Logout</a>
            </div>
        </div>
    </div>

    <main class="dashboard-container">
        <!-- Add Teacher Module with Chart Placeholder -->
        <div class="module-wrapper">
            <a href="Admin_Teachers.php" class="card-link">
                <div class="module-card">
                    Add Teacher
                </div>
            </a>
            <div class="chart-placeholder">
                <canvas id="teacherChart"></canvas> <!-- Chart.js Canvas -->
            </div>
        </div>

        <!-- Add Student Module with Chart Placeholder -->
        <div class="module-wrapper">
            <a href="Admin_ClassList.php" class="card-link">
                <div class="module-card">
                    Add Student
                </div>
            </a>
            <div class="chart-placeholder">
                <canvas id="studentChart"></canvas> <!-- Chart.js Canvas -->
            </div>
        </div>

        <!-- Add Guard Module with Chart Placeholder -->
        <div class="module-wrapper">
            <a href="Admin_Guard.php" class="card-link">
                <div class="module-card">
                    Add Guard
                </div>
            </a>
            <div class="chart-placeholder">
                <canvas id="guardChart"></canvas> <!-- Chart.js Canvas -->
            </div>
        </div>
    </main>

    <footer>
        <p>&copy; 2024 Students Attendance Monitoring System</p>
    </footer>

    <script src="../Javascript/Menu_bar.js"></script>
    <script src="../Javascript/Chart.js"></script>
</body>
</html>
