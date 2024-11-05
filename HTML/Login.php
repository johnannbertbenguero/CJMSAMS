<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Christ Jezus Montessori School Inc. Student Attendance Monitoring System</title>
  <link rel="icon" href="../Images/CJMS.png" type="image/png">
  <link rel="stylesheet" href="../Css/Login.css">
</head>
<body>
  <div class="login-container">
    <h1>Login</h1>
    <form id="loginForm" action="../php/auth.php" method="post">
      <!-- Display error message if it exists in the URL -->
      <?php if (isset($_GET['error'])) { ?>
        <p class="error"><?php echo htmlspecialchars($_GET['error']); ?></p>
      <?php } ?>
      <input type="text" name="email" placeholder="Email" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Login</button>
      <input type="hidden" id="roleInput" name="role">
      
      <!-- Forgot Password Link -->
      <div class="forgot-password">
        <a href="ForgotPassword.html">Forgot Password?</a>
      </div>
    </form>
  </div>
  
  <!-- Link to external JavaScript file -->
  <!-- <script src="../Javascript/Login.js"></script> -->
     <!--try to commit -->
          <!--isa pa -->
</body>
</html>
