document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.getElementById("registerButton");
    const loginButton = document.getElementById("loginButton");

    if (registerButton) {
        registerButton.addEventListener("click", () => {
            window.location.href = "RegistroU.html";
        });
    }

    if (loginButton) {
        loginButton.addEventListener("click", () => {
            window.location.href = "InicioS.html";
        });
    }
});