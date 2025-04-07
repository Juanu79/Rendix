// Firebase.js

// Importamos los módulos desde Firebase CDN
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
  storageBucket: "rendix-a0a9c.appspot.com", // corregido
  messagingSenderId: "469194450948",
  appId: "1:469194450948:web:c3160a5093280470bb2d51"
};

// Inicializar Firebase y Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Verificamos si el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const btn = document.getElementById("registerButton");

  if (!form || !btn) {
    console.warn("Formulario o botón no encontrados.");
    return;
  }

  // Página de REGISTRO (si existe el campo nombre)
  if (document.getElementById("name")) {
    btn.addEventListener("click", async (e) => {
      e.preventDefault(); // Evita que se recargue la página

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

  // Página de INICIO DE SESIÓN
  else {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();

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
