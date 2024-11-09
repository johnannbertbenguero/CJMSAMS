<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Attendance Monitoring System</title>
    <link rel="icon" href="../Images/CJMS.png" type="image/png">
    <link rel="stylesheet" href="../Css/Teacher_Dashboard.css">
</head>
<body>

      <!-- Header -->
    <div class="header">
        <div class="title">Dashboard</div>
        <div class="admin-name">Teacher Name</div>
        <div class="menu-container">
            <div class="menu-icon" onclick="toggleMenu()">&#9776;</div> <!-- Hamburger Menu Icon -->
            <div class="menu">
                <a href="Change_password.php" class="Change_password">Change Password</a>
                <a href="Login.php" class="logout">Logout</a>
            </div>
        </div>
    </div>
    

    <!-- Main Container -->
    <div class="container">
        <!-- Selection and Tabs Container -->
        <div class="selection-tabs">
            <div class="selections">
                <select id="gradeSelect" onchange="toggleStrandSelect(); loadStudentData()">
                    <option value="">Select Grade Level</option>
                    <option value="Kinder 1">Kinder 1</option>
                    <option value="Kinder 2">Kinder 2</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 1">Grade 2</option>
                    <option value="Grade 1">Grade 3</option>
                    <option value="Grade 1">Grade 4</option>
                    <option value="Grade 1">Grade 5</option>
                    <option value="Grade 1">Grade 6</option>
                    <option value="Grade 1">Grade 7</option>
                    <option value="Grade 1">Grade 8</option>
                    <option value="Grade 1">Grade 9</option>
                    <option value="Grade 1">Grade 10</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12">Grade 12</option>
                </select>

                <select id="strandSelect" style="display:none;" onchange="loadStudentData()">
                    <option value="">Select Strand</option>
                    <option value="HUMSS">HUMSS</option>
                    <option value="STEM">STEM</option>
                    <option value="ABM">ABM</option>
                    <option value="GAS">GAS</option>
                </select>

                <select id="sectionSelect" onchange="loadStudentData()">
                    <option value="">Select Section</option>
                    <option value="A">Section A</option>
                    <option value="B">Section B</option>
                    <option value="B">Section c</option>

                    <!-- Add more sections here -->
                </select>
            </div>
            
            <div class="tabs">
                <button onclick="showTab('classlist')" class="active" id="classlistTab">Classlist</button>
                <button onclick="showTab('qrCode')" id="qrTab">QR Code Scanner</button>
                <button onclick="showTab('attendanceLog')" id="logTab">Attendance Logs</button>
            </div>
        </div>

        <!-- Content Display Area -->
        <div class="content-display">
            <!-- Classlist -->
            <div id="classlist" class="tab-content">
                <h2>Classlist</h2>
                <table class="student-table">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Guardian Contact Number</th>
                        </tr>
                    </thead>
                    <tbody id="classlistTableBody">
                        <!-- Student data will be injected here by JavaScript -->
                    </tbody>
                </table>
            </div>

            <div id="qrCode" class="tab-content">
                <h2>QR Code Scanner</h2>
                <div class="scanner-container">
                    <div id="qr-video"> <!-- QR Video Container -->
                        <p id="qr-result">Waiting for scan...</p>
                    </div>
                    
                    <div class="student-info"> <!-- Student Info Container -->
                        <h2>Student Info</h2>
                        <p><strong>Student Name:</strong> <span id="student-name"></span></p>
                        <p><strong>Grade Level:</strong> <span id="grade-level"></span></p>
                        <p><strong>ID:</strong> <span id="student-id"></span></p>
                        <p><strong>Status:</strong> <span id="attendance-status">Waiting for scan...</span></p>
                    </div>
                </div>
            </div>
            

            <!-- Attendance Logs -->
            <div id="attendanceLog" class="tab-content" style="display: none;">
                <h2>Attendance Logs</h2>
                <div class="date-range">
                    <label for="startDate">Start Date:</label>
                    <input type="date" id="startDate">
                    <label for="endDate">End Date:</label>
                    <input type="date" id="endDate">
                    <button onclick="exportAttendanceLog()">Export</button>
                </div>
                <table class="attendance-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Student ID</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Time In</th>
                            <th>Time Out</th>
                        </tr>
                    </thead>
                    <tbody id="attendanceTableBody">
                        <!-- Attendance data will be injected here by JavaScript -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script src="../Javascript/Teacher_Dashboard.js"></script>
</body>
</html>
