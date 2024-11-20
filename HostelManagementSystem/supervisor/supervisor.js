// Example data for room cleanings and issues
const cleaningData = [
    { sNo: 1, studentName: "Nikitha", roomNo: "413", date: "2024-10-25", time: "10:00 AM", status: "Cleaned" },
    { sNo: 2, studentName: "Mukhil", roomNo: "103", date: "2024-10-25", time: "11:00 AM", status: "Not Cleaned" },
    { sNo: 3, studentName: "Abi", roomNo: "344", date: "2024-10-25", time: "12:00 PM", status: "Cleaned" }
];

const issueData = [
    { sNo: 1, studentName: "Nikitha", roomNo: "413", issue: "Fan not working", date: "2024-10-25", time: "10:00 AM" },
    { sNo: 2, studentName: "Mukhil", roomNo: "103", issue: "Table broke", date: "2024-10-25", time: "11:00 AM" },
    { sNo: 3, studentName: "Abi", roomNo: "344", issue: "Lock broken", date: "2024-10-25", time: "12:00 PM" }
];

// Load the initial dashboard content
loadContent('dashboard');

// Function to load content based on the section clicked
function loadContent(section) {
    const content = document.getElementById('content');
    
    if (section === 'dashboard') {
        content.innerHTML = `
            <div class="header">
                <h1>Welcome to the Teacher Dashboard</h1>
                <div>
                    <span>Hello, Supervisor</span>
                    <span>🔔</span>
                    <span>👤</span>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <h3>Next Room Cleaning</h3>
                    <p id="room-cleaning-count">0</p>
                </div>
                <div class="card">
                    <h3>Lost and Found</h3>
                    <p id="laundry-count">0</p>
                </div>
                <div class="card">
                    <h3>Pending Issues</h3>
                    <p id="pending-issues-count">1</p>
                </div>
            </div>
        `;
        // Update counts (demo data)
        document.getElementById('room-cleaning-count').textContent = cleaningData.length + ' Cleanings';
        document.getElementById('laundry-count').textContent = '3 Loads';
        document.getElementById('pending-issues-count').textContent = issueData.length;
    } else if (section === 'room-cleaning') {
        content.innerHTML = `
            <div class="header">
                <h1>Room Cleaning Schedule</h1>
                <div>
                    <span>Hello, Supervisor</span>
                    <span>🔔</span>
                    <span>👤</span>
                </div>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Student Name</th>
                            <th>Room No</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="cleaning-data"></tbody>
                </table>
            </div>
        `;
        renderTableData(cleaningData, ['sNo', 'studentName', 'roomNo', 'date', 'time', 'status'], 'cleaning-data');
    } else if (section === 'issue-solving') {
        content.innerHTML = `
            <div class="header">
                <h1>Issue Solving</h1>
                <div>
                    <span>Hello, Supervisor</span>
                    <span>🔔</span>
                    <span>👤</span>
                </div>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Student Name</th>
                            <th>Room No</th>
                            <th>Issue</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody id="issue-data"></tbody>
                </table>
            </div>
        `;
        renderTableData(issueData, ['sNo', 'studentName', 'roomNo', 'issue', 'date', 'time'], 'issue-data');
    } else if (section === 'feedback') {
        content.innerHTML = `<div class="header"><h1>Feedback Section (Coming Soon)</h1></div>`;
    }
}

// Function to render table data dynamically
function renderTableData(dataArray, keys, tableId) {
    const tableBody = document.getElementById(tableId);
    tableBody.innerHTML = '';
    
    dataArray.forEach((data) => {
        const row = document.createElement('tr');
        row.innerHTML = keys.map(key => `<td>${data[key]}</td>`).join('');
        tableBody.appendChild(row);
    });
}
