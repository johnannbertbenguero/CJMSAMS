
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Christ Jezus Montessori School Inc. Student Attendance Monitoring System</title>
    <link rel="icon" href="../Images/CJMS.png" type="image/png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../Css/SA_classList.css"> <!-- Link to external CSS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.qrcode/1.0/jquery.qrcode.min.js"></script>
</head>
<body>
    <div class="header">
        <div class="back-button">
            <a href="SA_Students.php"><img src="../Images/arrowback.png" alt="arrow back" class="back"> </a>
            <h1 id="gradeTitle"></h1>
        </div>
        <div class="admin-info">
            <p>Admin Name</p>
            <a href="Account.php" class="logout">Logout</a>
        </div>
    </div>

    <div class="container">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addStudentModal" onclick="prepareAddStudentForm()">
            Add New Student
        </button>

        <table class="table table-bordered table-striped mt-4">
            <thead>
                <tr>
                    <th>Student ID Number</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Guardian Contact Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="studentTableBody">
                <!-- Students List will be dynamically added here -->
            </tbody>
        </table>
    </div>

    <!-- Modal for Adding/Updating Student -->
    <div class="modal" id="addStudentModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Add New Student</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal Body -->
                <div class="modal-body">
                    <form id="studentForm">
                        <div class="form-group">
                            <label for="lastName">Last Name:</label>
                            <input type="text" class="form-control" id="lastName" required>
                        </div>
                        <div class="form-group">
                            <label for="firstName">First Name:</label>
                            <input type="text" class="form-control" id="firstName" required>
                        </div>
                        <div class="form-group">
                            <label for="middleName">Middle Name:</label>
                            <input type="text" class="form-control" id="middleName" required>
                        </div>
                        <div class="form-group">
                            <label for="guardianContactNumber">Guardian Contact Number:</label>
                            <input type="text" class="form-control" id="guardianContactNumber" required>
                        </div>
                    </form>
                </div>

                <!-- Modal Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" id="submitButton" onclick="addStudent()">Add</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal for QR Code -->
    <div class="modal" id="qrCodeModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Student QR Code</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <!-- Modal Body -->
                <div class="modal-body">
                    <div id="qrCodeContainer"></div>
                </div>
                <!-- Modal Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <script src="../Javascript/SA_ClassList.js"></script>
    <script src="../Javascript/Adding_student.js"></script>


</body>
</html>
