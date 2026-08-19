const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");

const savedName = localStorage.getItem("userName");
const savedEmail = localStorage.getItem("userEmail");

if (savedName) {
    profileName.textContent = savedName;
} else {
    profileName.textContent = "Guest";
}

if (savedEmail) {
    profileEmail.textContent = savedEmail;
} else {
    profileEmail.textContent = "";
}


// Continue Watching

document.getElementById("continueBtn").addEventListener("click", function () {

    window.location.href = "index.html";

});


// Logout

document.getElementById("logoutBtn").addEventListener("click", function () {

    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("isLoggedIn");

    alert("You have been logged out.");

    window.location.href = "login.html";

});
