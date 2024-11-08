<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Password - Christ Jezus Montessori School Inc.</title>
    <link rel="icon" href="../Images/CJMS.png" type="image/png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../Css/Change_password.css"> <!-- Link to external CSS -->
</head>
<body>
    <div class="modal-content">
        <h2>Change Password</h2>
        <form id="changePasswordForm" onsubmit="changePassword(event)">
            <div class="form-row">
                <label for="currentPassword">Current Password:</label>
                <input type="password" id="currentPassword" required>
            </div>
            <div class="form-row">
                <label for="newPassword">New Password:</label>
                <input type="password" id="newPassword" required>
            </div>
            <div class="form-row">
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" required>
            </div>
            <div class="modal-footer">
                <button type="submit">Submit</button>
                <button type="button" class="cancel-btn" onclick="goBack()">Cancel</button>
            </div>
        </form>
    </div>
<script src="../Javascript/Change_password.js"></script>
</body>
</html>