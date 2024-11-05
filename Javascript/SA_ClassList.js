 // Get grade from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const grade = urlParams.get('grade');

    // Display the grade level and class data
    const gradeTitle = document.getElementById('gradeTitle');
    const classListContainer = document.querySelector('.class-list-container');

    if (grade && classData[grade]) {
      // Update the title with the selected grade
      gradeTitle.innerText = `${grade} Class List`;

      // Display student names for the selected grade
      classData[grade].forEach(student => {
        const studentItem = document.createElement('p');
        studentItem.innerText = student;
        classListContainer.appendChild(studentItem);
      });
    } else {
      // If grade is not found, show a message
      gradeTitle.innerText = "Class List Not Found";
      classListContainer.innerHTML = "<p>No data available for this grade level.</p>";
    }