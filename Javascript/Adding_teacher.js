document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>')
document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>')
document.write('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>')

let teachers = [];
let editIndex = -1; // Global variable to store the index of the teacher being edited


function addTeacher() {
    const lastName = document.getElementById('last_name').value;
    const firstName = document.getElementById('first_name').value;
    const email = document.getElementById('email').value;  // Ensure an email input field is available
    const ContactNumber = document.getElementById('phone_number').value;

    if (!firstName || !lastName || !email || !ContactNumber) {
        console.error("One or more required fields are missing.");
        alert("Please fill in all required fields.");
        return;
    }
    $.ajax({
        url: '../PHP/add_teacher.php',  // Updated URL if needed
        type: 'POST',
        data: {
            last_name: lastName,
            first_name: firstName,
            email: email,
            phone_number: ContactNumber  // This should match PHP variable names
        },
        success: function(response) {
            console.log("Add guard response:", response); // Debug: Show response
            alert(response);
            $('#addGuardModal').modal('hide');
            document.getElementById('teacherForm').reset();
            // loadGuards(); // Reload guards table
        },
        error: function(error) {
            console.error("Error adding guard:", error); // Debug: Log error
        }
    });
}

function loadTeachers() {
    $.ajax({
        url: '../Php/get_teachers.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            console.log("Response from server:", response);  // Debugging line
            
            if (response.status === 'success') {
                // Assign fetched data to the global teachers array
                teachers = response.data;

                const tableBody = document.getElementById('teacherTableBody');
                tableBody.innerHTML = ''; // Clear existing rows

                // Populate the table with the retrieved data
                teachers.forEach((teacher, index) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${teacher.user_id}</td>
                        <td>${teacher.last_name}</td>
                        <td>${teacher.first_name}</td>
                        <td>${teacher.advisory_class || '-'}</td>
                        <td>${teacher.phone_number}</td>
                        <td>${teacher.email}</td>
                        <td>
                            <button class="btn btn-info btn-sm" onclick="editTeacher(${index})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteTeacher(${index})">Delete</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                console.error('Error loading teachers:', response.message);
                alert('Error loading teachers: ' + response.message);
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', error);
            alert('AJAX Error: ' + error);
        }
    });
}

// Call loadTeachers when the page loads to ensure data is fetched immediately
document.addEventListener('DOMContentLoaded', loadTeachers);



function editTeacher(index) {
    const teacher = teachers[index];
    document.getElementById('user_id').value = teacher.user_id;
    document.getElementById('last_name').value = teacher.last_name;
    document.getElementById('first_name').value = teacher.first_name;
    document.getElementById('phone_number').value = teacher.phone_number;
    document.getElementById('email').value = teacher.email;

    // Reset the grade level checkboxes
    populateGradeLevels();

    // Check the grade levels that are assigned to the teacher
    teacher.gradeLevel.split(", ").forEach((assignment) => {
        const [level, role] = assignment.split(" (");
        const gradeCheckbox = document.getElementById(`gradeLevel-${level}`);
        const adviserCheckbox = document.getElementById(`adviser-${level}`);

        if (gradeCheckbox) {
            gradeCheckbox.checked = true;
            adviserCheckbox.disabled = false; // Enable adviser checkbox
            adviserCheckbox.checked = role === "Adviser)";
        }
    });

    editIndex = index; // Set the edit index

    $('#addTeacherModal').modal('show');
}

function deleteTeacher(index) {
    teachers.splice(index, 1); // Remove teacher from the array
    // updateTeacherTable(); // Update the table
    loadTeachers();
}

