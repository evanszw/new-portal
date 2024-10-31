// Mock data (replace with actual data fetching)
const studentAttendance = {
    "Thembalethu": [
        { date: "2024-03-11", status: "Absent" },
        { date: "2024-03-12", status: "Absent" },
        { date: "2024-03-13", status: "Absent" },
        { date: "2024-03-14", status: "Present" },
        { date: "2024-03-15", status: "Absent" },
        { date: "2024-03-16", status: "Absent" },
        { date: "2024-03-17", status: "Present" }
    ],
    "evans": [
        { date: "2024-03-11", status: "Absent" },
        { date: "2024-03-12", status: "Present" },
        { date: "2024-03-13", status: "Absent" },
        { date: "2024-03-14", status: "Present" },
        { date: "2024-03-15", status: "Present" },
        { date: "2024-03-16", status: "Absent" },
        { date: "2024-03-17", status: "Present" }
    ]
};

document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const childName = document.getElementById('child_name').value.trim();
    const attendanceContainer = document.getElementById('attendance-container');
    const errorMessage = document.getElementById('error-message');

    if (childName in studentAttendance) {
        const attendanceRecords = studentAttendance[childName];
        const html = `
            <h2>Attendance Records for ${childName}</h2>
            <table class="attendance-table">
                <tr>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
                ${attendanceRecords.map(record => `
                    <tr>
                        <td>${record.date}</td>
                        <td>${record.status}</td>
                    </tr>
                `).join('')}
            </table>
        `;
        attendanceContainer.innerHTML = html;
        errorMessage.innerHTML = "";
    } else {
        attendanceContainer.innerHTML = "";
        errorMessage.innerHTML = `No student found with the name: ${childName}`;
    }
})

// ...

document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const childName = document.getElementById('child_name').value.trim();
    const attendanceContainer = document.getElementById('attendance-container');
    const errorMessage = document.getElementById('error-message');

    if (childName in studentAttendance) {
        const attendanceRecords = studentAttendance[childName];
        const absentDays = attendanceRecords.filter(record => record.status === "Absent").length;

        let backgroundColor;
        if (absentDays >= 4) {
            backgroundColor = "red";
        } else if (absentDays > 0) {
            backgroundColor = "orange";
        } else {
            backgroundColor = "lightblue";
        }

        const html = `
            <h2 style="color: white;">Attendance Records for ${childName}</h2>
            <table class="attendance-table">
                <tr>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
                ${attendanceRecords.map(record => `
                    <tr>
                        <td>${record.date}</td>
                        <td>${record.status}</td>
                    </tr>
                `).join('')}
            </table>
        `;
        attendanceContainer.innerHTML = html;
        attendanceContainer.style.background = backgroundColor;
        errorMessage.innerHTML = "";
    } else {
        attendanceContainer.innerHTML = "";
        errorMessage.innerHTML = `No student found with the name: ${childName}`;
    }
});