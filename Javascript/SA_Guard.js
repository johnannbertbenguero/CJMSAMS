       document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>') 
        document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>')
     document.write('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>')

        let guards = [];
        let editIndex = -1;

        function addGuard() {
            const guardIdNumber = document.getElementById('guardIdNumber').value;
            const lastName = document.getElementById('lastName').value;
            const firstName = document.getElementById('firstName').value;
            const contactNumber = document.getElementById('contactNumber').value;
            const emailAddress = document.getElementById('emailAddress').value;

            const guard = {
                guardIdNumber: guardIdNumber,
                lastName: lastName,
                firstName: firstName,
                contactNumber: contactNumber,
                emailAddress: emailAddress
            };

            if (editIndex === -1) {
                guards.push(guard);
            } else {
                guards[editIndex] = guard;
                editIndex = -1;
            }

            updateGuardTable();

            document.getElementById('guardForm').reset();

            $('#addGuardModal').modal('hide');
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
