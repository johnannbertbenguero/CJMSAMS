document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>');
document.write('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>');
document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>');

let students = [];

function getGradeLevelFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('grade'); // Get the 'grade' parameter from the URL
}

function addStudent() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gradeLevel = getGradeLevelFromURL(); // Dynamically set grade level from URL
    const guardianContactNumber = document.getElementById('guardianContactNumber').value;

    $.ajax({
        url: '../PHP/add_student.php',
        type: 'POST',
        data: {
            first_name: firstName,
            last_name: lastName,    
            grade_level: gradeLevel,
            guardian_contact_number: guardianContactNumber
        },
        success: function(response) {
            alert(response); // Display response from PHP
            $('#addStudentModal').modal('hide'); // Close modal
            document.getElementById('studentForm').reset(); // Reset form
            loadStudents(); // Reload students table
        },
        error: function(error) {
            console.error("Error adding student: ", error);
        }
    });
}

function loadStudents() {
    const gradeLevel = getGradeLevelFromURL(); // Function to retrieve grade level from URL

    $.ajax({
        url: '../PHP/get_students.php',
        type: 'GET',
        data: { grade: gradeLevel }, // Send grade level as a parameter
        success: function(students) {
            students = JSON.parse(students); // Parse JSON response
            console.log("Fetched Students Data:", students); // Check the data format
            const tableBody = document.getElementById('studentTableBody');
            tableBody.innerHTML = ''; // Clear previous entries

            // Populate the table with students
            students.forEach((student) => {
                const row = `
                    <tr>
                        <td>${student.student_id}</td>
                        <td>${student.last_name}</td>
                        <td>${student.first_name}</td>
                        <td>${student.parent_phone_number}</td>
                        <td>
                            <button class="btn btn-warning btn-sm" onclick="editStudent(${student.student_id})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.student_id})">Delete</button>
                            <button class="btn btn-info btn-sm" onclick="generateQRCode(${student.student_id})">Generate QR</button>
                        </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        },
        error: function(error) {
            console.error("Error fetching students: ", error);
        }
    });
}

function prepareAddStudentForm() {
    document.querySelector('.modal-title').innerText = 'Add New Student';
    document.querySelector('#submitButton').innerText = 'Add';
    document.querySelector('#submitButton').setAttribute('onclick', 'addStudent()');
    document.getElementById('studentForm').reset(); // Reset form fields
}
