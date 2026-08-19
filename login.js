const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Check if fields are empty
    if (email === "" || password === "") {
        loginMessage.textContent = "Please enter your email and password.";
        return;
    }

    // Get registered user details
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    // Check whether an account exists
    if (savedEmail === null || savedPassword === null) {
        loginMessage.textContent = "No account found. Please sign up first.";
        return;
    }

    // Check login details
    if (email !== savedEmail || password !== savedPassword) {
        loginMessage.textContent = "Incorrect email or password.";
        return;
    }

    // Successful login
    loginMessage.textContent = "Login successful!";

    // Store login status
    localStorage.setItem("isLoggedIn", "true");

    // Go to profile
    setTimeout(function () {
        window.location.href = "profile.html";
    }, 800);
});