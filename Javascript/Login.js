// Get the role from the URL
const urlParams = new URLSearchParams(window.location.search);
const role = urlParams.get('role');

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent actual form submission
  
  if (role === 'admin') {
    window.location.href = 'SuperAdmin_Dashboard.html';
  } else if (role === 'teacher') {
    window.location.href = 'TeacherDashboard.html';
  } else if (role === 'guard') {
    window.location.href = 'Qrcode_scanner.html';
  } else {
    alert('Invalid role selected!');
  }
});