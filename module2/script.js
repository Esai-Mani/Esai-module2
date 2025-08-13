const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    // Username validation
    if (usernameValue === '') {
        setError(username, 'Username cannot be blank');
    } else if (!/^[A-Za-z ]{2,}$/.test(usernameValue)) {
        setError(username, 'Username must be at least 2 letters');
    } else {
        setSuccess(username);
    }

    // Email validation
    if (emailValue === '') {
        setError(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setError(email, 'Enter a valid email');
    } else {
        setSuccess(email);
    }

    // Password validation
    if (passwordValue === '') {
        setError(password, 'Password cannot be blank');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    // Confirm Password validation
    if (cpasswordValue === '') {
        setError(cpassword, 'Confirm password cannot be blank');
    } else if (passwordValue !== cpasswordValue) {
        setError(cpassword, 'Passwords do not match');
    } else {
        setSuccess(cpassword);
    }
}

// Set error
function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

// Set success
function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Email validation regex
function isEmail(email) {
    return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email);
}
