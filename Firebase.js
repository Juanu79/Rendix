// Firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC6qdyDlTnruiMTZZfZ-F-IsfCl2Jy0gbw",
  authDomain: "rendix-a0a9c.firebaseapp.com",
  projectId: "rendix-a0a9c",
  storageBucket: "rendix-a0a9c.firebasestorage.app",
  messagingSenderId: "469194450948",
  appId: "1:469194450948:web:c3160a5093280470bb2d51"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Verificamos en qué página estamos usando el ID del formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const btn = document.getElementById("registerButton");

  if (!form || !btn) return;

  // Página de REGISTRO
  if (document.getElementById("name")) {
    btn.addEventListener("click", async () => {
      const nombre = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!nombre || !email || !password) {
        alert("Por favor completa todos los campos.");
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registro exitoso");
        window.location.href = "Principal.html";
      } catch (error) {
        console.error("Error en el registro:", error);
        alert("Error: " + error.message);
      }
    });
  }

  // Página de INICIO
  else {
    btn.addEventListener("click", async () => {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Por favor completa todos los campos.");
        return;
      }

      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Inicio de sesión exitoso");
        window.location.href = "Principal.html";
      } catch (error) {
        console.error("Error en el inicio de sesión:", error);
        alert("Error: " + error.message);
      }
    });
  }
});