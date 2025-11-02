document.getElementById("enrollmentForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Capture user input
    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value.trim();

    // Validation to ensure all fields are filled
    if (!name || !email || !course) {
        alert("Please fill in all fields before enrolling.");
        return;
    }

    // Save the data to localStorage
    localStorage.setItem("enrolledName", name);
    localStorage.setItem("enrolledEmail", email);
    localStorage.setItem("enrolledCourse", course);

    // Redirect to the course page
    window.location.href = "course.html";
});
