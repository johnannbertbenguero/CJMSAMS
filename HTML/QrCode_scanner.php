<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Christ Jezus Montessori School Inc. Student Attendance Monitoring System</title>
  
  <!-- Linking the favicon -->
  <link rel="icon" href="../Images/CJMS.png" type="image/png">
  
  <!-- Linking the CSS file -->
  <link rel="stylesheet" href="../Css/QrCode_scanner.css">
</head>
<body>
  <div class="header">
    <h1>QR Code Scanner</h1>
    <!-- Back button -->
    <a id="backButton" class="back-button" href="javascript:history.back();">
      <img src="../Images/arrowback.png" alt="back" class="back">
    </a>
    
    <div class="admin-info">
      <p>Admin Name</p>
      <a href="Change_password.html" class="Change_password">Change Password</a>
      <!-- Logout button -->
      <a href="Account.php" class="logout">Logout</a>
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
     <div class="confirmCredentials">
      <button id="confirm-button" onclick="confirmCredentials()">Confirm Info</button><!-- Add Confirm button -->
     </div>
    
  </div>

  <div class="footer">
    <p>© 2024 Christ Jezus Montessori School Inc. Student Attendance Monitoring System</p>
  </div>

  <!-- Linking the JavaScript file -->
  <script src="../Javascript/Qrcode_scanner.js"></script>
</body>
</html>