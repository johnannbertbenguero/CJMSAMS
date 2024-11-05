function changePassword(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if the new password and confirm password match
    if (newPassword !== confirmPassword) {
        alert("New Password and Confirm Password do not match.");
        return;
    }

    // Simulate a successful password change
    alert("Password changed successfully!");

    // Clear the form fields after success
    document.getElementById("changePasswordForm").reset();

    // Redirect back to the previous page
    goBack();
}

function goBack() {
    window.history.back(); 
}
        