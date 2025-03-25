function showLogin() {
    document.getElementById("signup-container").classList.add("hidden");
    document.getElementById("login-container").classList.remove("hidden");
}

function showSignup() {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("signup-container").classList.remove("hidden");
}

function signup() {
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (name === "" || email === "" || password === "") {
        document.getElementById("signup-message").innerText = "All fields are required!";
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("loggedIn", "false"); // Set user as not logged in

    document.getElementById("signup-message").innerText = "Signup successful! Please login.";
}

function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("loggedIn", "true");  // Store login status
        document.getElementById("login-message").innerText = "Login Successful!";
        window.location.href = "homepage.html";  // Redirect to home page
    } else {
        document.getElementById("login-message").innerText = "Invalid email or password!";
    }
}

// Auto-redirect if already logged in
window.onload = function () {
    if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "homepage.html";
    }
};
