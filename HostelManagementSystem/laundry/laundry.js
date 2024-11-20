function setActiveLink(link) {
    const links = document.querySelectorAll(".sidebar nav ul li a");
    links.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
}

function loadDashboardContent() {
    setActiveLink(
        document.querySelector(
            '.sidebar nav ul li a[onclick="loadDashboardContent()"]'
        )
    );
    const contentSection = document.getElementById("content-section");
    contentSection.innerHTML = `
        <div class="dashboard-section">
            <div class="dashboard-card">
                <h3>Total Appointments</h3>
                <p>5</p>
            </div>
            <div class="dashboard-card">
                <h3>Upcoming Appointments</h3>
                <p>2</p>
            </div>
            <div class="dashboard-card">
                <h3>Available Services</h3>
                <p>3</p>
            </div>
        </div>
    `;
}

function loadScheduleAppointmentsContent() {
    setActiveLink(
        document.querySelector(
            '.sidebar nav ul li a[onclick="loadScheduleAppointmentsContent()"]'
        )
    );
    const contentSection = document.getElementById("content-section");
    contentSection.innerHTML = `
        <div class="schedule-appointments-container">
            <h2>Create Appointment</h2>
            <form>
                <label for="appointment-date">Date:</label>
                <input type="date" id="appointment-date" required><br>
                <label for="start-time">Start Time:</label>
                <input type="time" id="start-time" required><br>
                <label for="end-time">End Time:</label>
                <input type="time" id="end-time" required><br>
                <label for="service">Service:</label>
                <select id="service" required>
                    <option value="">Select Service</option>
                    <option value="Laundry Wash">Laundry Wash</option>
                    <option value="Dry Cleaning">Dry Cleaning</option>
                    <option value="Ironing">Ironing</option>
                </select><br>
                <button type="submit">Create Appointment</button>
            </form>
        </div>
    `;
}

function loadManageAppointmentsContent() {
    setActiveLink(
        document.querySelector(
            '.sidebar nav ul li a[onclick="loadManageAppointmentsContent()"]'
        )
    );
    const contentSection = document.getElementById("content-section");
    contentSection.innerHTML = `
        <div class="manage-appointments-container">
            <h2>Manage Appointments</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Service</th>
                        <th>Registrations</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2024-10-06</td>
                        <td>10:00 AM - 12:00 PM</td>
                        <td>Laundry Wash</td>
                        <td>5/10</td>
                        <td><button>Edit</button> <button>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function loadServiceHistoryContent() {
    setActiveLink(
        document.querySelector(
            '.sidebar nav ul li a[onclick="loadServiceHistoryContent()"]'
        )
    );
    const contentSection = document.getElementById("content-section");
    contentSection.innerHTML = `
        <div class="service-history-container">
            <h2>Service History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Service</th>
                        <th>Students Served</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2024-10-05</td>
                        <td>Dry Cleaning</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>2024-10-04</td>
                        <td>Laundry Wash</td>
                        <td>15</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

window.onload = loadDashboardContent;
