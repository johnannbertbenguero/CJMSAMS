 // Get the module from the URL
 const urlParams = new URLSearchParams(window.location.search);
 const module = urlParams.get('module');  // Get the module name from the URL

 // Set the back button's href dynamically based on the module
 const backButton = document.getElementById('backButton');
 if (module) {
   backButton.href = module + ".html";  // Set the back button to link to the appropriate module page
 } else {
   backButton.href = "defaultModule.html";  // Default fallback page if module is missing
 }

 // Function to filter attendance records
 function filterAttendance() {
   const studentFilter = document.getElementById('student-filter').value.toLowerCase();
   const startDate = new Date(document.getElementById('start-date-filter').value);
   const endDate = new Date(document.getElementById('end-date-filter').value);
   const rows = document.querySelectorAll('#attendance-body tr');

   rows.forEach(row => {
     const cells = row.querySelectorAll('td');
     const studentName = (cells[1].innerText + ' ' + cells[2].innerText).toLowerCase();
     const date = new Date(cells[0].innerText);

     const matchesStudent = studentFilter === '' || studentName.includes(studentFilter);
     const matchesDate = (isNaN(startDate) || date >= startDate) && (isNaN(endDate) || date <= endDate);

     row.style.display = matchesStudent && matchesDate ? '' : 'none'; // Show or hide the row based on filters
   });
 }