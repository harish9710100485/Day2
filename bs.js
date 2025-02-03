document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        let isValid = true;
        document.querySelectorAll('.error').forEach(error => error.remove()); // Clear error messages

        // Check for validation errors
        if (!validateForm()) {
            isValid = false;
        }

        // If the form is valid, display the data and store in sessionStorage
        if (isValid) {
            const formData = new FormData(form);
            
            // Reformat the date of birth to dd-mm-yyyy
            const dob = document.getElementById('dob').value;
            if (dob) {
                const formattedDob = formatDate(dob);
                formData.set('dob', formattedDob); // Update formData with formatted date
            }

            // Store each form entry in sessionStorage
            formData.forEach((value, key) => {
                sessionStorage.setItem(key, value);
            });

            // Redirect to the display page
            window.location.href = 'display.html';  // Redirect to the page that will show the data
        }
    });

    function validateForm() {
        let isValid = true;

        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const gender = document.querySelectorAll('input[name="gender"]');
        const dob = document.getElementById('dob');
        const course = document.getElementById('course');
        const address = document.getElementById('address');
        const agree = document.getElementById('agree');

        if (firstName.value.trim() === '') {
            showError(firstName, 'First name is required');
            isValid = false;
        }

        if (lastName.value.trim() === '') {
            showError(lastName, 'Last name is required');
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            showError(email, 'Enter a valid email address');
            isValid = false;
        }

        if (!/^\d{10}$/.test(phone.value)) {
            showError(phone, 'Enter a valid 10-digit phone number');
            isValid = false;
        }

        if (![...gender].some(radio => radio.checked)) {
            showError(document.querySelector('.gender-group'), 'Select a gender');
            isValid = false;
        }

        if (dob.value.trim() === '') {
            showError(dob, 'Date of birth is required');
            isValid = false;
        }

        if (course.value === '') {
            showError(course, 'Select a course');
            isValid = false;
        }

        if (address.value.trim() === '') {
            showError(address, 'Address is required');
            isValid = false;
        }

        if (!agree.checked) {
            showError(agree.parentNode, 'You must agree to the terms');
            isValid = false;
        }

        return isValid;
    }

    function showError(element, message) {
        const error = document.createElement('span');
        error.classList.add('error');
        error.textContent = message;
        element.parentNode.appendChild(error);
    }

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    // Helper function to format date as dd-mm-yyyy
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are 0-based, so add 1
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }
});
