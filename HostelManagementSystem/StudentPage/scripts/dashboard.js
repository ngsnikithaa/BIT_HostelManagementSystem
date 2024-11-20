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
                <h3>Next Room Cleaning</h3>
                <p>Today</p>
            </div>
            <div class="dashboard-card">
                <h3>Laundry Schedule</h3>
                <p>Tomorrow</p>
            </div>
            <div class="dashboard-card">
                <h3>Salon Appointment</h3>
                <p>Next Week</p>
            </div>
            <div class="dashboard-card">
                <h3>Pending Issues</h3>
                <p>1</p>
            </div>
        </div>
    `;
}

// Function to load the Room Cleaning content
function loadCleaningContent() {
    setActiveLink(document.querySelector('.sidebar nav ul li a[onclick="loadCleaningContent()"]')); // Set Room Cleaning as active

    const contentSection = document.getElementById('content-section');
    contentSection.innerHTML = `
        <div class="room-cleaning-container">
            <h2>Schedule Room Cleaning</h2>
            <form action="#" method="POST">
                <div class="form-group">
                    <label for="hostel">Hostel Name:</label>
                    <select id="hostel" name="hostel" required>
                        <option value="">Select Hostel</option>
                        <option value="Hostel A">Hostel A</option>
                        <option value="Hostel B">Hostel B</option>
                        <option value="Hostel C">Hostel C</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="room">Room Number:</label>
                    <select id="room" name="room" required>
                        <option value="">Select Room Number</option>
                        <option value="101">101</option>
                        <option value="102">102</option>
                        <option value="103">103</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="date">Cleaning Date:</label>
                    <input type="date" id="date" name="date" required>
                </div>

                <div class="form-group">
                    <label for="time">Cleaning Time:</label>
                    <input type="time" id="time" name="time" required>
                </div>

                <button type="submit" class="submit-btn">Submit Request</button>
            </form>
        </div>
    `;
}

// Function to load the Laundry content
function loadLaundryContent() {
    setActiveLink(document.querySelector('.sidebar nav ul li a[onclick="loadLaundryContent()"]')); // Set Laundry as active

    const contentSection = document.getElementById('content-section');
    contentSection.innerHTML = `
        <div class="laundry-schedule-container">
            <h2>Schedule Laundry Pickup</h2>
            <form action="#" method="POST">
                <div class="form-group">
                    <label for="hostel">Hostel Name:</label>
                    <select id="hostel" name="hostel" required>
                        <option value="">Select Hostel</option>
                        <option value="Hostel A">Hostel A</option>
                        <option value="Hostel B">Hostel B</option>
                        <option value="Hostel C">Hostel C</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="room">Room Number:</label>
                    <select id="room" name="room" required>
                        <option value="">Select Room Number</option>
                        <option value="101">101</option>
                        <option value="102">102</option>
                        <option value="103">103</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="laundry-date">Pickup Date:</label>
                    <input type="date" id="laundry-date" name="laundry-date" required>
                </div>

                <div class="form-group">
                    <label for="laundry-time">Pickup Time:</label>
                    <input type="time" id="laundry-time" name="laundry-time" required>
                </div>

                <button type="submit" class="submit-btn">Schedule Laundry</button>
            </form>
        </div>
    `;
}
// Function to load Salon content
function loadSalonContent() {
    setActiveLink(document.querySelector('.sidebar nav ul li a[onclick="loadSalonContent()"]')); // Set Salon as active

    const contentSection = document.getElementById('content-section');
    contentSection.innerHTML = `
        <div class="salon-appointment-container">
            <h2>Schedule Salon Appointment</h2>
            <form action="#" method="POST">
                <div class="form-group">
                    <label for="hostel">Hostel Name:</label>
                    <select id="hostel" name="hostel" required>
                        <option value="">Select Hostel</option>
                        <option value="Hostel A">Hostel A</option>
                        <option value="Hostel B">Hostel B</option>
                        <option value="Hostel C">Hostel C</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="room">Room Number:</label>
                    <select id="room" name="room" required>
                        <option value="">Select Room Number</option>
                        <option value="101">101</option>
                        <option value="102">102</option>
                        <option value="103">103</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="appointment-date">Appointment Date:</label>
                    <input type="date" id="appointment-date" name="appointment-date" required>
                </div>

                <div class="form-group">
                    <label for="appointment-time">Appointment Time:</label>
                    <input type="time" id="appointment-time" name="appointment-time" required>
                </div>

                <button type="submit" class="submit-btn">Schedule Appointment</button>
            </form>
        </div>
    `;
}

// Function to load Issue Solving content
function loadIssueSolvingContent() {
    setActiveLink(document.querySelector('.sidebar nav ul li a[onclick="loadIssueSolvingContent()"]')); // Set Issue Solving as active

    const contentSection = document.getElementById('content-section');
    contentSection.innerHTML = `
        <div class="issue-solving-container">
            <h2>Submit an Issue</h2>
            <form action="#" method="POST">
                <div class="form-group">
                    <label for="hostel">Hostel Name:</label>
                    <select id="hostel" name="hostel" required>
                        <option value="">Select Hostel</option>
                        <option value="Hostel A">Hostel A</option>
                        <option value="Hostel B">Hostel B</option>
                        <option value="Hostel C">Hostel C</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="room">Room Number:</label>
                    <select id="room" name="room" required>
                        <option value="">Select Room Number</option>
                        <option value="101">101</option>
                        <option value="102">102</option>
                        <option value="103">103</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="issue-description">Describe the Issue:</label>
                    <textarea id="issue-description" name="issue-description" rows="4" placeholder="Explain the issue..." required></textarea>
                </div>

                <button type="submit" class="submit-btn">Submit Issue</button>
            </form>
        </div>
    `;
}
// Function to toggle the visibility of the dropdown menu
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Hide the dropdown menu when clicking outside
window.addEventListener('click', function (event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const profileIcon = document.querySelector('.profile-dropdown .fas.fa-user-circle');

    if (!profileIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});

