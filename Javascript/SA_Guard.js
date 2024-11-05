document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>');
document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>');
document.write('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>');

let guards = [];
let editIndex = -1;

function addGuard() {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('phone_number').value;

    if (!firstName || !lastName || !email || !contactNumber) {
        console.error("One or more required fields are missing.");
        alert("Please fill in all required fields.");
        return;
    }

    $.ajax({
        url: '../PHP/add_guard.php',
        type: 'POST',
        data: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: contactNumber
        },
        success: function(response) {
            console.log("Add guard response:", response);
            alert(response);
            $('#addGuardModal').modal('hide');
            document.getElementById('guardForm').reset();
            loadGuards();
        },
        error: function(error) {
            console.error("Error adding guard:", error);
        }
    });
}

function loadGuards() {
    $.ajax({
        url: '../Php/get_guard.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            console.log("Response from server:", response);

            if (response.status === 'success') {
                guards = response.data;

                const tableBody = document.getElementById('guardTableBody');
                tableBody.innerHTML = '';

                guards.forEach((guard, index) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${guard.user_id}</td>
                        <td>${guard.last_name}</td>
                        <td>${guard.first_name}</td>
                        <td>${guard.phone_number}</td>
                        <td>${guard.email}</td>
                        <td>
                            <button class="btn btn-info btn-sm" onclick="editGuard(${index})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteGuard(${index})">Delete</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                console.error('Error loading guards:', response.message);
                alert('Error loading guards: ' + response.message);
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', error);
            alert('AJAX Error: ' + error);
        }
    });
}

document.addEventListener('DOMContentLoaded', loadGuards);

function editGuard(index) {
    const guard = guards[index];
    document.getElementById('user_id').value = guard.user_id;
    document.getElementById('last_name').value = guard.last_name;
    document.getElementById('first_name').value = guard.first_name;
    document.getElementById('phone_number').value = guard.phone_number;
    document.getElementById('email').value = guard.email;

    editIndex = index;
    $('#addGuardModal').modal('show');
}

function deleteGuard(index) {
    guards.splice(index, 1);
    loadGuards();
}
