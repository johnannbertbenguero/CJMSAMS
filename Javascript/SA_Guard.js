       document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>') 
        document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>')
     document.write('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>')

        let guards = [];
        let editIndex = -1;

        function addGuard() {
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
                url: '../PHP/add_guard.php',  // Updated URL if needed
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
                    document.getElementById('guardForm').reset();
                    loadGuards(); // Reload guards table
                },
                error: function(error) {
                    console.error("Error adding guard:", error); // Debug: Log error
                }
            });
        }
        
        

        function updateGuardTable() {
            const tableBody = document.getElementById('guardTableBody');
            tableBody.innerHTML = '';

            guards.forEach((guard, index) => {
                const row = `<tr>
                    <td>${guard.guardIdNumber}</td>
                    <td>${guard.lastName}</td>
                    <td>${guard.firstName}</td>
                    <td>${guard.contactNumber}</td>
                    <td>${guard.emailAddress}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editGuard(${index})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteGuard(${index})">Delete</button>
                    </td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        }

        function editGuard(index) {
            const guard = guards[index];
            document.getElementById('guardIdNumber').value = guard.guardIdNumber;
            document.getElementById('lastName').value = guard.lastName;
            document.getElementById('firstName').value = guard.firstName;
            document.getElementById('contactNumber').value = guard.contactNumber;
            document.getElementById('emailAddress').value = guard.emailAddress;

            editIndex = index;
            $('#addGuardModal').modal('show');
        }

        function deleteGuard(index) {
            guards.splice(index, 1);
            updateGuardTable();
        }
