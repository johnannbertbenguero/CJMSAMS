function sendPasswordReset() {
    const email = document.getElementById('email').value;
    
    if (email) {
      // Simulate sending email functionality
      document.getElementById('responseMessage').innerText = 'A password reset link has been sent to your email address.';
    } else {
      document.getElementById('responseMessage').innerText = 'Please enter a valid email address.';
    }
  }