// Show and hide tabs for Classlist, QR Code, and Attendance Logs
function showTab(tabName) {
    document.getElementById("classlist").style.display = "none";
    document.getElementById("qrCode").style.display = "none";
    document.getElementById("attendanceLog").style.display = "none";
    document.getElementById("analytics").style.display = "none";

    document.getElementById("classlistTab").classList.remove("active");
    document.getElementById("qrTab").classList.remove("active");
    document.getElementById("logTab").classList.remove("active");

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName + "Tab").classList.add("active");
}

// Display strand dropdown for Grade 11 and 12 only
function toggleStrandSelect() {
    const grade = document.getElementById("gradeSelect").value;
    document.getElementById("strandSelect").style.display = (grade === "Grade 11" || grade === "Grade 12") ? "inline-block" : "none";
}

// Load Student and Attendance Data (Fetching data dynamically)
function loadStudentData() {
    // Simulating fetching data from the backend (You can replace this with actual API call)
    fetch('/api/getStudentData') // API endpoint to fetch student data
        .then(response => response.json())
        .then(students => {
            // Fill Classlist Table with fetched student data
            const classlistTableBody = document.getElementById("classlistTableBody");
            classlistTableBody.innerHTML = students.map(student => `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.lastName}</td>
                    <td>${student.firstName}</td>
                    <td>${student.middleName}</td>
                    <td>${student.contact}</td>
                </tr>
            `).join('');
        })
        .catch(error => console.error("Error loading student data:", error));

    // Fetch attendance data dynamically
    fetch('/api/getAttendanceData') // API endpoint to fetch attendance data
        .then(response => response.json())
        .then(attendance => {
            // Fill Attendance Table with fetched attendance data
            const attendanceTableBody = document.getElementById("attendanceTableBody");
            attendanceTableBody.innerHTML = attendance.map(record => `
                <tr>
                    <td>${record.date}</td>
                    <td>${record.id}</td>
                    <td>${record.lastName}</td>
                    <td>${record.firstName}</td>
                    <td>${record.middleName}</td>
                    <td>${record.timeIn}</td>
                    <td>${record.timeOut}</td>
                </tr>
            `).join('');
        })
        .catch(error => console.error("Error loading attendance data:", error));
}

// Export attendance log data based on date range
function exportAttendanceLog() {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    alert(`Exporting attendance log from ${startDate} to ${endDate}`);
}

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

// Start scanning after the page loads
window.onload = function() {
    startScanning();
};

// Select all tab buttons
const tabButtons = document.querySelectorAll('.tabs button');

// Function to handle tab switching
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove "active" class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add "active" class to the clicked button
        button.classList.add('active');
    });
});
// Menu
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

function goBack() {
    window.history.back(); 
}

function createAttendanceChart(labels, data) {
    const ctx = document.getElementById('attendanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar', // Choose 'pie', 'bar', or 'line' based on your preference
        data: {
            labels: labels,
            datasets: [{
                label: 'Monthly Attendance Rate (%)',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

async function fetchChartData() {
    try {
        // Replace with your actual backend URL
        const response = await fetch('backend-url-for-attendance-data');
        if (response.ok) {
            const data = await response.json();

            // Create labels for all months of the year with the current year
            const currentYear = new Date().getFullYear();
            const labels = [
                `January ${currentYear}`, `February ${currentYear}`, `March ${currentYear}`,
                `April ${currentYear}`, `May ${currentYear}`, `June ${currentYear}`,
                `July ${currentYear}`, `August ${currentYear}`, `September ${currentYear}`,
                `October ${currentYear}`, `November ${currentYear}`, `December ${currentYear}`
            ];

            // If no data is available, we'll leave the data empty (0 for now)
            const attendanceRates = new Array(12).fill(0);  // 12 months, all attendance data set to 0

            // Set the total students and attendance rate if available in data
            document.getElementById("totalStudents").textContent = data.totalStudents || "0";
            document.getElementById("attendanceRate").textContent = data.overallAttendanceRate || "0%";

            // Create the chart with the fetched data (or empty data)
            createAttendanceChart(labels, attendanceRates);
        } else {
            throw new Error("Network response was not ok.");
        }
    } catch (error) {
        console.error('Error fetching chart data:', error);

        // If there’s an error or no data, still display the months with empty data
        const currentYear = new Date().getFullYear();
        const labels = [
            `January ${currentYear}`, `February ${currentYear}`, `March ${currentYear}`,
            `April ${currentYear}`, `May ${currentYear}`, `June ${currentYear}`,
            `July ${currentYear}`, `August ${currentYear}`, `September ${currentYear}`,
            `October ${currentYear}`, `November ${currentYear}`, `December ${currentYear}`
        ];

        const attendanceRates = new Array(12).fill(0);  // Empty data for now
        createAttendanceChart(labels, attendanceRates);
    }
}

document.addEventListener('DOMContentLoaded', fetchChartData);
