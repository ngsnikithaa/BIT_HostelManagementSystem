document.getElementById('loginBtn').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation with redirection based on credentials
    if (username === 'student' && password === '1234') {
        // Redirect to the dashboard page for admin
        window.location.href = 'C:/Users/ngsni/Desktop/HostelManagementSystem/StudentPage/html/dashboard.html';
    } else if (username === 'salon' && password === '1234') {
        // Redirect to the salon page for salon staff
        window.location.href = 'C:/Users/ngsni/Desktop/HostelManagementSystem/salon/salon.html'; // Correct relative path to salon.html
    } 
    else if (username === 'laundry' && password === '1234') {
        // Redirect to the salon page for laundry staff
        window.location.href = 'C:/Users/ngsni/Desktop/HostelManagementSystem/laundry/laundry.html'; // Correct relative path to laundry.html
    }
    else if (username === 'supervisor' && password === '1234') {
        // Redirect to the salon page for supervisor staff
        window.location.href = 'C:/Users/ngsni/Desktop/HostelManagementSystem/supervisor/supervisor.html'; // Correct relative path to supervisor.html
    }
    else if (username === 'admin' && password === '1234') {
        // Redirect to the admin page for supervisor staff
        window.location.href = 'C:/Users/ngsni/Desktop/HostelManagementSystem/admin/admin.html'; // Correct relative path to admin.html
    }  
    else {
        alert('Invalid username or password');
    }
});