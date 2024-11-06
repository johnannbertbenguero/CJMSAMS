<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Christ Jezus Montessori School Inc. Student Attendance Monitoring System</title>
    <link rel="icon" href="../Images/CJMS.png" type="image/png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../Css/SA_Guard.css"> <!-- Link to external CSS -->
</head>
<body>

    <div class="header">
        <div class="back-button">
            <a href="SuperAdmin_Dashboard.php"><img src="../Images/arrowback.png" alt="arrow back" class="back"> </a>
            <h1>Guards List</h1>
        </div>
        <div class="admin-info">
            <p>Admin Name</p>
            <a href="Change_password.html" class="Change_password">Change Password</a>
            <a href="Account.php" class="logout">Logout</a>
        </div>
    </div>
    
    <div class="container">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addGuardModal">
            Add New Guard
        </button>
    
        <div class="table-responsive">
            <table class="table table-bordered table-striped mt-4">
                <thead>
                    <tr>
                        <th>Guard ID Number</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Contact Number</th>
                        <th>Email Address</th>
                        <th>Actions</th> <!-- Removed Username and Password columns -->
                    </tr>
                </thead>
                <tbody id="guardTableBody">
                    <!-- Guards List will be dynamically added here -->
                </tbody>
            </table>
        </div>
    </div>
    
    <!-- Modal for Adding/Editing Guard -->
    <div class="modal" id="addGuardModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h6 class="modal-title">Add/Edit Guard</h6>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal Body -->
                <div class="modal-body">
                    <form id="guardForm">
                        <div class="form-group">
                            <label for="guardIdNumber">Guard ID Number:</label>
                            <input type="text" class="form-control" id="guardIdNumber" required>
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name:</label>
                            <input type="text" class="form-control" id="lastName" required>
                        </div>
                        <div class="form-group">
                            <label for="firstName">First Name:</label>
                            <input type="text" class="form-control" id="firstName" required>
                        </div>
                        <div class="form-group">
                            <label for="contactNumber">Contact Number:</label>
                            <input type="text" class="form-control" id="contactNumber" required>
                        </div>
                        <div class="form-group">
                            <label for="emailAddress">Email Address:</label>
                            <input type="email" class="form-control" id="emailAddress" required>
                        </div>
                    </form>
                </div>

                <!-- Modal Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" onclick="addGuard()">Save</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <script src="../Javascript/SA_Guard.js"></script>
</body>
</html>
