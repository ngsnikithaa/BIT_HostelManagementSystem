// Function to toggle active class between sidebar items
function setActiveLink(link) {
    // Get all sidebar links
    const links = document.querySelectorAll('.sidebar nav ul li a');

    // Remove the active class from all links
    links.forEach(item => {
        item.classList.remove('active');
    });

    // Add the active class to the clicked link
    link.classList.add('active');
}

// Function to load the default dashboard content
function loadDashboardContent() {
    setActiveLink(document.querySelector('.sidebar nav ul li a[onclick="loadDashboardContent()"]')); // Set Dashboard as active

    const contentSection = document.getElementById('content-section');
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

// Function to load the Manage Appointments content
// Function to load the Manage Appointments content for Saloon Admin
function loadScheduleAppointmentsContent() {
    setActiveLink(document.querySelector('.sidebar nav ul li a[onclick="loadScheduleAppointmentsContent()"]')); // Set Manage Appointments as active

    const contentSection = document.getElementById('content-section');
    contentSection.innerHTML = `
        <div class="schedule-appointments-container">
            <h2>Create Appointment</h2>
            <form action="#" method="POST">
                <div class="form-group">
                    <label for="appointment-date">Date:</label>
                    <input type="date" id="appointment-date" name="appointment-date" required>
                </div>

                <div class="form-group">
                    <label for="start-time">Start Time:</label>
                    <input type="time" id="start-time" name="start-time" required>
                </div>

                <div class="form-group">
                    <label for="end-time">End Time:</label>
                    <input type="time" id="end-time" name="end-time" required>
                </div>

                <div class="form-group">
                    <label for="service">Service:</label>
                    <select id="service" name="service" required>
                        <option value="">Select Service</option>
                        <option value="Haircut">Haircut</option>
                        <option value="Shave">Shave</option>
                        <option value="Facial">Facial</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="registration-limit">Registration Limit:</label>
                    <input type="number" id="registration-limit" name="registration-limit" min="1" required>
                </div>

                <button type="submit" class="submit-btn">Create Appointment</button>
            </form>
        </div>
    `;
}


// Load default dashboard content when the page is first opened
window.onload = loadDashboardContent;