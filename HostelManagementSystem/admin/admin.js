
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
          <h3>Total Students</h3>
          <p>120</p>
        </div>
        <div class="dashboard-card">
          <h3>Available Rooms</h3>
          <p>15</p>
        </div>
        <div class="dashboard-card">
          <h3>Supervisors</h3>
          <p>5</p>
        </div>
        <div class="dashboard-card">
          <h3>Lost Items</h3>
          <p>8</p>
        </div>
      </div>
    `;
}

function loadStudentDetailsContent() {
    setActiveLink(
        document.querySelector(
            '.sidebar nav ul li a[onclick="loadStudentDetailsContent()"]'
        )
    );
    const contentSection = document.getElementById("content-section");
    contentSection.innerHTML = `
        <div class="table-container">
            <h2>Student Details</h2>
            <div class="search-bar">
                <input type="text" id="search-bar" placeholder="Search for students...">
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Department</th>
                        <th>Room Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>2nd</td>
                        <td>Computer Science</td>
                        <td>101</td>
                        <td>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>3rd</td>
                        <td>Mechanical</td>
                        <td>202</td>
                        <td>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Emily Johnson</td>
                        <td>1st</td>
                        <td>Electrical</td>
                        <td>303</td>
                        <td>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="add-student-btn">Add New Student</button>
        </div>
    `;
}
function loadSupervisorDetailsContent() {
    setActiveLink(
        document.querySelector(
            '.sidebar nav ul li a[onclick="loadSupervisorDetailsContent()"]'
        )
    );
    const contentSection = document.getElementById("content-section");
    contentSection.innerHTML = `
        <div class="table-container">
            <h2>Supervisor Details</h2>
            <div class="search-bar">
                <input type="text" id="search-bar" placeholder="Search for supervisors...">
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Room Number</th>
                        <th>Job Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Smith</td>
                        <td>+123456789</td>
                        <td>101</td>
                        <td>Supervisor</td>
                        <td>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Jane Doe</td>
                        <td>+987654321</td>
                        <td>102</td>
                        <td>Senior Supervisor</td>
                        <td>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Emily Brown</td>
                        <td>+555555555</td>
                        <td>103</td>
                        <td>Supervisor</td>
                        <td>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="add-student-btn">Add New Supervisor</button>
        </div>
    `;
}
function loadRoomDetailsContent() {
    setActiveLink(
        document.querySelector(
            '.sidebar nav ul li a[onclick="loadRoomDetailsContent()"]'
        )
    );
    const contentSection = document.getElementById("content-section");
    contentSection.innerHTML = `
        <div class="table-container">
            <h2>Room Details</h2>
            <div class="search-bar">
                <input type="text" id="search-bar" placeholder="Search for rooms...">
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Room Number</th>
                        <th>Room Capacity</th>
                        <th>Students</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>101</td>
                        <td>2</td>
                        <td>
                            <ul>
                                <li>John Doe - 7376221CS101</li>
                                <li>Jane Smith - 7376221CS102</li>
                            </ul>
                        </td>
                        <td>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>102</td>
                        <td>4</td>
                        <td>
                            <ul>
                                <li>Emily Johnson - 7376221EE101</li>
                                <li>David Brown - 7376221EE102</li>
                                <li>Sarah White - 7376221EE103</li>
                                <li>Michael Black - 7376221EE104</li>
                            </ul>
                        </td>
                        <td>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>103</td>
                        <td>3</td>
                        <td>
                            <ul>
                                <li>Alice Green - 7376221ME101</li>
                                <li>Robert Blue - 7376221ME102</li>
                                <li>Linda Yellow - 7376221ME103</li>
                            </ul>
                        </td>
                        <td>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="add-student-btn">Add Room</button>
        </div>
    `;
}

function loadLostAndFoundContent() {
    setActiveLink(
        document.querySelector(
            '.sidebar nav ul li a[onclick="loadLostAndFoundContent()"]'
        )
    );
    const contentSection = document.getElementById("content-section");
    contentSection.innerHTML = `
        <div class="table-container">
            <h2>Lost and Found</h2>
            <div class="search-bar">
                <input type="text" id="search-bar" placeholder="Search lost items...">
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Item Lost</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Example rows -->
                    <tr>
                        <td>Wallet</td>
                        <td>Black leather wallet with ID</td>
                        <td>Found</td>
                        <td>
                            <button class="close-btn">Close</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Backpack</td>
                        <td>Blue backpack with books inside</td>
                        <td>Not Found</td>
                        <td>
                            <button class="close-btn">Close</button>
                        </td>
                    </tr>
                    <!-- More rows can be added dynamically -->
                </tbody>
            </table>
            <button class="raise-missing-btn">Raise Missing</button>
        </div>
    `;
}




// Load the default dashboard on page load
window.onload = loadDashboardContent;
