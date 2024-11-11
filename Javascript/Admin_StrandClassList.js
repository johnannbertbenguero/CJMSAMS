// Sample data for each strand (replace with actual data if needed)

    // Get strand from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const strand = urlParams.get('strand');

    // Display the strand title and student data
    const strandTitle = document.getElementById('strandTitle');
    const strandListContainer = document.querySelector('.strand-list-container');

    if (strand && strandData[strand]) {
    // Update the title with the selected strand
    strandTitle.innerText = `${strand} Class List`;

    // Display students for the selected strand
    strandData[strand].forEach(student => {
        const studentItem = document.createElement('p');
        studentItem.innerText = student;
        strandListContainer.appendChild(studentItem);
    });
    } else {
    // If strand is not found, show a message
    strandTitle.innerText = "Strand Not Found";
    strandListContainer.innerHTML = "<p>No data available for this strand.</p>";
    }