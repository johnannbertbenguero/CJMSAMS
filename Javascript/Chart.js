document.addEventListener('DOMContentLoaded', function() {
    // Teacher Analytics Chart
    const teacherCtx = document.getElementById('teacherChart').getContext('2d');
    const teacherChart = new Chart(teacherCtx, {
        type: 'bar',
        data: {
            labels: [
                'Kinder 1', 'Kinder 2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 
                'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 
                'Grade 11 - ABM', 'Grade 11 - HUMSS', 'Grade 11 - STEM', 'Grade 11 - GAS',
                'Grade 12 - ABM', 'Grade 12 - HUMSS', 'Grade 12 - STEM', 'Grade 12 - GAS'
            ],
            datasets: [{
                label: 'Total Teachers',
                data: [], // Data will be fetched from backend (teacher counts per grade or department)
                backgroundColor: '#4e73df',
                borderColor: '#4e73df',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                y: {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1 // Whole numbers only, no decimals
                    }
                }
            }
        }
    });

    // Student Analytics Chart (Grade Level with Strands for Grade 11 & 12)
    const studentCtx = document.getElementById('studentChart').getContext('2d');
    const studentChart = new Chart(studentCtx, {
        type: 'bar', // Bar chart
        data: {
            labels: [
                'Kinder 1', 'Kinder 2', 
                'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 
                'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 
                'Grade 11 - ABM', 'Grade 11 - HUMSS', 'Grade 11 - STEM', 'Grade 11 - GAS',
                'Grade 12 - ABM', 'Grade 12 - HUMSS', 'Grade 12 - STEM', 'Grade 12 - GAS'
            ], // Full list of grade levels and strands for Grade 11 & 12
            datasets: [{
                label: 'Students per Grade Level',
                data: [], // Data will be fetched from backend
                backgroundColor: '#66b3ff',
                borderColor: '#66b3ff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                y: {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1 // Whole numbers only, no decimals
                    }
                }
            }
        }
    });

    // Guard Analytics Chart
    const guardCtx = document.getElementById('guardChart').getContext('2d');
    const guardChart = new Chart(guardCtx, {
        type: 'line', // Line chart for Guard analytics
        data: {
            labels: ['Guard 1', 'Guard 2', 'Guard 3'], // Placeholder labels
            datasets: [{
                label: 'Guards per Shift',
                data: [], // Data will be fetched from backend
                borderColor: '#4e73df',
                backgroundColor: 'rgba(78, 115, 223, 0.2)',
                fill: true,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                y: {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1 // Whole numbers only, no decimals
                    }
                }
            }
        }
    });

    // Function to fetch data from backend and update the charts (Example using fetch)
    function fetchData() {
        // Replace with your actual API endpoints
        fetch('/api/teacherData')
            .then(response => response.json())
            .then(data => {
                teacherChart.data.datasets[0].data = data.teacherCount; // Dynamic teacher data
                teacherChart.update();
            });

        fetch('/api/studentData')
            .then(response => response.json())
            .then(data => {
                studentChart.data.datasets[0].data = data.studentCount; // Dynamic student data
                studentChart.update();
            });

        fetch('/api/guardData')
            .then(response => response.json())
            .then(data => {
                guardChart.data.datasets[0].data = data.guardCount; // Dynamic guard data
                guardChart.update();
            });
    }

    fetchData(); // Call fetchData on page load
});


