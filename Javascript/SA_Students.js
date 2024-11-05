// JavaScript file: gradeLevel.js

const gradeLevels = [
    { name: "Kinder 1", link: "SA_ClassList.php?grade=Kinder 1" },
    { name: "Kinder 2", link: "SA_ClassList.php?grade=Kinder 2" },
    { name: "Grade 1", link: "SA_ClassList.php?grade=Grade 1" },
    { name: "Grade 2", link: "SA_ClassList.php?grade=Grade 2" },
    { name: "Grade 3", link: "SA_ClassList.php?grade=Grade 3" },
    { name: "Grade 4", link: "SA_ClassList.php?grade=Grade 4" },
    { name: "Grade 5", link: "SA_ClassList.php?grade=Grade 5" },
    { name: "Grade 6", link: "SA_ClassList.php?grade=Grade 6" },
    { name: "Grade 7", link: "SA_ClassList.php?grade=Grade 7" },
    { name: "Grade 8", link: "SA_ClassList.php?grade=Grade 8" },
    { name: "Grade 9", link: "SA_ClassList.php?grade=Grade 9" },
    { name: "Grade 10", link: "SA_ClassList.php?grade=Grade 10" },
    { name: "Grade 11", link: "SA_StrandList.php?grade=11" },  // Redirect to SA_StrandList.php for Grade 11
    { name: "Grade 12", link: "SA_StrandList.php?grade=12" }   // Redirect to SA_StrandList.php for Grade 12
  ];
  
  const dashboardContainer = document.querySelector('.dashboard-container');
  
  gradeLevels.forEach(grade => {
    const linkElement = document.createElement('a');
    linkElement.href = grade.link;
    linkElement.classList.add('card-link');
  
    const card = document.createElement('div');
    card.classList.add('module-card');
    card.textContent = grade.name;
  
    linkElement.appendChild(card);
    dashboardContainer.appendChild(linkElement);
  });
  