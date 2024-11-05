    document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>')
    document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>')
    document.write('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>')

    let teachers = [];
    let editIndex = -1; // Global variable to store the index of the teacher being edited

    // Grade levels to be dynamically added with checkboxes
    const gradeLevels = [
        "Kinder 1", "Kinder 2", "Grade 1", "Grade 2", "Grade 3", "Grade 4",
        "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10",
        "Grade 11", "Grade 12"
    ];
    

    // Function to populate the grade level checkboxes with adviser option
    function populateGradeLevels() {
        const gradeLevelContainer = document.getElementById('gradeLevelContainer');
        gradeLevelContainer.innerHTML = ''; // Clear the container first

        gradeLevels.forEach(level => {
            const div = document.createElement('div');
            div.classList.add('form-check');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('form-check-input');
            checkbox.id = `gradeLevel-${level}`;
            checkbox.value = level;

            const label = document.createElement('label');
            label.classList.add('form-check-label');
            label.htmlFor = checkbox.id;
            label.innerText = level;

            const adviserCheckbox = document.createElement('input');
            adviserCheckbox.type = 'checkbox';
            adviserCheckbox.classList.add('form-check-input', 'ml-2');
            adviserCheckbox.id = `adviser-${level}`;
            adviserCheckbox.value = 'Adviser';
            adviserCheckbox.disabled = true; // Initially disabled

            const adviserLabel = document.createElement('label');
            adviserLabel.classList.add('form-check-label', 'ml-4');
            adviserLabel.htmlFor = adviserCheckbox.id;
            adviserLabel.innerText = 'Adviser';

            // Enable adviser checkbox only if the grade level checkbox is checked
            checkbox.addEventListener('change', function() {
                adviserCheckbox.disabled = !this.checked;
            });

            div.appendChild(checkbox);
            div.appendChild(label);
            div.appendChild(adviserCheckbox);
            div.appendChild(adviserLabel);
            gradeLevelContainer.appendChild(div);
        });
    }

    populateGradeLevels(); // Call the function to populate checkboxes

    // function addTeacher() {
    //     const facultyNumber = document.getElementById('facultyNumber').value;
    //     const lastName = document.getElementById('lastName').value;
    //     const firstName = document.getElementById('firstName').value;
    //     const contactNumber = document.getElementById('contactNumber').value;
    //     const emailAddress = document.getElementById('emailAddress').value;

    //     const selectedGradeLevels = [];
    //     const adviserRoles = [];

    //     // Loop through grade levels to check if they are selected and if the teacher is an adviser
    //     gradeLevels.forEach(level => {
    //         const gradeCheckbox = document.getElementById(`gradeLevel-${level}`);
    //         const adviserCheckbox = document.getElementById(`adviser-${level}`);

    //         if (gradeCheckbox.checked) {
    //             selectedGradeLevels.push(level);
    //             adviserRoles.push(adviserCheckbox.checked ? 'Adviser' : 'Not Adviser');
    //         }
    //     });

    //     const gradeLevelAssignments = selectedGradeLevels.map((level, index) => `${level} (${adviserRoles[index]})`).join(", ");

    //     const teacher = {
    //         facultyNumber: facultyNumber,
    //         lastName: lastName,
    //         firstName: firstName,
    //         contactNumber: contactNumber,
    //         emailAddress: emailAddress,
    //         gradeLevel: gradeLevelAssignments
    //     };

    //     if (editIndex === -1) {
    //         // If no teacher is being edited, add a new teacher
    //         teachers.push(teacher);
    //     } else {
    //         // If editing, update the existing teacher's details
    //         teachers[editIndex] = teacher;
    //         editIndex = -1; // Reset the edit index
    //     }

    //     updateTeacherTable();

    //     document.getElementById('teacherForm').reset();
    //     populateGradeLevels(); // Reset the checkboxes

    //     $('#addTeacherModal').modal('hide');
    // }

    function addTeacher() {
        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
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
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone_number: ContactNumber  // This should match PHP variable names
            },
            success: function(response) {
                console.log("Add guard response:", response); // Debug: Show response
                alert(response);
                $('#addGuardModal').modal('hide');
                document.getElementById('teacherForm').reset();
                loadGuards(); // Reload guards table
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
                if (response.status === 'success') {
                    const teachers = response.data;
                    const tableBody = document.getElementById('teacherTableBody');
                    tableBody.innerHTML = ''; // Clear existing rows
    
                    // Populate the table with the retrieved data
                    teachers.forEach((teacher, index) => {
                        const row = document.createElement('tr');
    
                        row.innerHTML = `
                            <td>${teacher.facultyNumber}</td>
                            <td>${teacher.lastName}</td>
                            <td>${teacher.firstName}</td>
                            <td>${teacher.contactNumber}</td>
                            <td>${teacher.emailAddress}</td>
                            <td>${teacher.gradeLevel}</td>
                            <td>
                                <button class="btn btn-info btn-sm" onclick="editTeacher(${index})">Edit</button>
                                <button class="btn btn-danger btn-sm" onclick="deleteTeacher(${index})">Delete</button>
                            </td>
                        `;
                        tableBody.appendChild(row);
                    });
                } else {
                    alert('Error loading teachers: ' + response.message);
                }
            },
            error: function(xhr, status, error) {
                alert('AJAX Error: ' + error);
            }
        });
    }
    

    // function updateTeacherTable() {
    //     const tableBody = document.getElementById('teacherTableBody');
    //     tableBody.innerHTML = ''; // Clear the table body before updating

    //     teachers.forEach((teacher, index) => {
    //         const row = document.createElement('tr');

    //         row.innerHTML = `
    //             <td>${teacher.facultyNumber}</td>
    //             <td>${teacher.lastName}</td>
    //             <td>${teacher.firstName}</td>
    //             <td>${teacher.contactNumber}</td>
    //             <td>${teacher.emailAddress}</td>
    //             <td>${teacher.gradeLevel}</td>
    //             <td>
    //                 <button class="btn btn-info btn-sm" onclick="editTeacher(${index})">Edit</button>
    //                 <button class="btn btn-danger btn-sm" onclick="deleteTeacher(${index})">Delete</button>
    //             </td>
    //         `;
    //         tableBody.appendChild(row);
    //     });
    // }

    function editTeacher(index) {
        const teacher = teachers[index];
        document.getElementById('facultyNumber').value = teacher.facultyNumber;
        document.getElementById('lastName').value = teacher.lastName;
        document.getElementById('firstName').value = teacher.firstName;
        document.getElementById('contactNumber').value = teacher.contactNumber;
        document.getElementById('emailAddress').value = teacher.emailAddress;

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
