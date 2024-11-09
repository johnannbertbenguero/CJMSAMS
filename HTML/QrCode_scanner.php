<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Christ Jezus Montessori School Inc. Student Attendance Monitoring System</title>
  <link rel="icon" href="../Images/CJMS.png" type="image/png">  <!-- Linking the favicon --> 
  <link rel="stylesheet" href="../Css/QrCode_scanner.css"> <!-- Linking the CSS file -->
</head>
<body>
      <!-- Header -->
      <div class="header">
        <div class="title">Qr Code Scanner</div>
        <div class="admin-name">Guard Name</div>
        <div class="menu-container">
            <div class="menu-icon" onclick="toggleMenu()">&#9776;</div> <!-- Hamburger Menu Icon -->
            <div class="menu">
                <a href="Change_password.php" class="Change_password">Change Password</a>
                <a href="Login.php" class="logout">Logout</a>
            </div>
        </div>
    </div>
  
  <div class="container">
    <div class="scanner-container">
      <h2>QR Code Attendance Scanner</h2>
      <div id="qr-video"></div> <!-- This div will contain the video -->
      <p id="qr-result">Waiting for scan...</p>
    </div>
    
    <div class="student-info">
      <br>
      <h2>Student Info</h2>
      <br>
      <p><strong>Student Name:</strong> <span id="student-name"></span></p>
      <br>
      <p><strong>Grade Level:</strong> <span id="grade-level"></span></p>
      <br>
      <p><strong>ID:</strong> <span id="student-id"></span></p>
      <br>
      <p><strong>Status:</strong> <span id="attendance-status">Waiting for scan...</span></p>
      <br>
    </div>
    
  </div>

  <div class="footer">
    <p>© 2024 Christ Jezus Montessori School Inc. Student Attendance Monitoring System</p>
  </div>

  <!-- Linking the JavaScript file -->
  <script src="../Javascript/Qrcode_scanner.js"></script>
</body>
</html>