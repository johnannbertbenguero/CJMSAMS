// Importing the HTML5-QRCode library
document.write('<script src="https://cdn.jsdelivr.net/npm/html5-qrcode/minified/html5-qrcode.min.js"><\/script>');

console.log("QR Code Scanner script loaded successfully");

function onScanSuccess(decodedText, decodedResult) {
    // Assuming decodedText contains student information like "Name|Grade|ID"
    let studentInfo = decodedText.split('|');

    // Check if all required fields are available
    if (studentInfo.length === 3) {
        // Update the student info fields in the HTML
        document.getElementById('student-name').innerText = studentInfo[0];
        document.getElementById('grade-level').innerText = studentInfo[1];
        document.getElementById('student-id').innerText = studentInfo[2];
        document.getElementById('attendance-status').innerText = 'Waiting for confirmation...';
    } else {
        // If the QR code is not formatted correctly, show an error message
        document.getElementById('attendance-status').innerText = 'Invalid QR code. Please rescan.';
    }

    // Optionally, log the result
    console.log("QR Code scanned result:", decodedResult);
}

function startScanning() {
    const html5QrCode = new Html5Qrcode("qr-video");

    // Start the QR code scanning
    html5QrCode.start(
        { facingMode: "environment" }, // Use back camera
        {
            fps: 10,   // Frames per second
            qrbox: { width: 250, height: 250 }  // The box where QR code will be detected
        },
        onScanSuccess
    ).catch(err => {
        console.error("Error starting QR code scanner:", err);
        alert("Failed to start camera. Please check if camera permissions are granted.");
    });
}

// Function to confirm the scanned credentials
function confirmCredentials() {
    const studentName = document.getElementById('student-name').innerText;
    const gradeLevel = document.getElementById('grade-level').innerText;
    const studentId = document.getElementById('student-id').innerText;

    // Check if the student information is filled
    if (studentName && gradeLevel && studentId) {
        document.getElementById('attendance-status').innerText = 'Confirmed';
        alert('Student information confirmed.');
    } else {
        // If any field is missing, ask for rescan
        document.getElementById('attendance-status').innerText = 'Info incomplete, please rescan.';
        alert('Student information is incomplete. Please rescan.');
    }
}

// Start scanning after the page loads
window.onload = function() {
    startScanning();
};
