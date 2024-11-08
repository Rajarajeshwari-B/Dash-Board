// Example script to handle any future interactions like animations or API calls
document.addEventListener('DOMContentLoaded', function () {
    console.log("Educational Platform Dashboard Loaded!");
});
// JavaScript to render the bar chart for user engagement
const ctx = document.getElementById('engagementBarChart').getContext('2d');
const engagementBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Active Users', 'Posts Submitted', 'User Feedback'],
        datasets: [{
            label: 'User Engagement Stats',
            data: [5000, 1200, 800], // Example data for engagement
            backgroundColor: ['#4CAF50', '#FF6F61', '#FFD700'],
            borderColor: ['#388E3C', '#D32F2F', '#F57F17'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 500 // Adjusts the spacing between tick marks
                }
            }
        }
    }
});
