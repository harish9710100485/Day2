# Student Registration Form

## Overview
This project is a **Student Registration Form** built using **HTML, Bootstrap 5, and JavaScript**. It allows students to enter their personal details, select a course, and submit their registration.

## Features
- Bootstrap 5 for responsive design.
- Form validation for required fields.
- Pattern validation for phone numbers.
- Gender selection via radio buttons.
- Course selection via a dropdown menu.
- Terms and conditions agreement checkbox.
- Stores user input in **sessionStorage**.
- Reformats the date of birth to **dd-mm-yyyy** format.
- Redirects to `bstarget.html` after submission.

## Technology Stack
- **HTML** for structure
- **Bootstrap 5** for styling and layout
- **JavaScript** for interactivity

## File Structure
```
project-folder/
│── index.html          # Main form page with Bootstrap 5
│── bstarget.html       # Page to display submitted data
│── script.js           # JavaScript for handling form logic
```

## Installation & Usage
1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Fill in the form and submit.
4. Data will be stored in `sessionStorage` and redirected to `bstarget.html`.

## JavaScript Functionality
- Prevents form submission if required fields are empty.
- Stores form data in **sessionStorage**.
- Reformats **Date of Birth (DOB)** to `dd-mm-yyyy`.
- Redirects user to `bstarget.html`.

```javascript
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());

    // Reformat the date of birth (dd-mm-yyyy)
    const dob = new Date(formObject.dob);
    const formattedDob = ('0' + dob.getDate()).slice(-2) + '-' + ('0' + (dob.getMonth() + 1)).slice(-2) + '-' + dob.getFullYear();

    // Store the formatted date in sessionStorage
    sessionStorage.setItem('dob', formattedDob);

    // Store the other form data in sessionStorage
    for (const [key, value] of Object.entries(formObject)) {
        if (key !== 'dob') {
            sessionStorage.setItem(key, value);
        }
    }

    // Redirect to target page (bstarget.html)
    window.location.href = 'bstarget.html';
});
```

## Bootstrap 5 Integration
- Uses Bootstrap 5 for styling.
- **Card layout** for a clean design.
- **Form control classes** for input styling.
- **Responsive container** for better accessibility.

## Conclusion
This project provides a modern, responsive, and user-friendly **student registration system** using Bootstrap 5 and JavaScript. The use of `sessionStorage` ensures temporary data storage before displaying it on `bstarget.html`.

---
**Author:** Harish  
**Internship:** MinervaSoft  
**Project:** Student Registration Form

