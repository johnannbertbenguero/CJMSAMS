 // Get grade from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const grade = urlParams.get('grade');

    // Display the grade level and class data
    const gradeTitle = document.getElementById('gradeTitle');
    const classListContainer = document.querySelector('.class-list-container');

    if (grade && classData[grade]) {
      // Update the title with the selected grade
      gradeTitle.innerText = `${grade} Class List`;

      // Display student names for the selected grade
      classData[grade].forEach(student => {
        const studentItem = document.createElement('p');
        studentItem.innerText = student;
        classListContainer.appendChild(studentItem);
      });
    } else {
      // If grade is not found, show a message
      gradeTitle.innerText = "Class List Not Found";
      classListContainer.innerHTML = "<p>No data available for this grade level.</p>";
    }

// Menu Bar
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
//change password
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