document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita el envío del formulario si hay errores
        validateForm();
    });

    function validateForm() {
        const nombre = document.getElementById("nombre");
        const correo = document.getElementById("correo");
        const mensaje = document.getElementById("mensaje");

        // Validar campos
        validateField(nombre, "El nombre es obligatorio.");
        validateField(correo, "El correo es obligatorio.", validateEmail);
        validateField(mensaje, "El mensaje es obligatorio.");

        // Si no hay errores, mostrar mensaje de exito
        const errors = form.querySelectorAll(".error");
        if (errors.length === 0) {
            showSuccessMessage();
            form.reset(); //limpiar formulario
        }
    }

    function validateField(field, errorMessage, validationFunction = null) {
        const error = field.nextElementSibling;
        if (field.value.trim() === "") {
            showError(field, error, errorMessage);
        } else if (validationFunction && !validationFunction(field.value)) {
            showError(field, error, "Por favor, ingrese un formato válido.");
        } else {
            showSuccess(field, error);
        }
    }

    function showError(field, error, message) {
        field.classList.add("error");
        field.classList.remove("success");
        error.textContent = message;
        error.style.display = "block";

        // Ocultar mensaje de error despues de 3 segundos
        setTimeout(() => {
            hideError(field, error);
        }, 3000);
    }

    function showSuccess(field, error) {
        field.classList.add("success");
        field.classList.remove("error");
        error.textContent = "";
        error.style.display = "none";
    }

    function hideError(field, error) {
        field.classList.remove("error");
        error.textContent = "";
        error.style.display = "none";
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showSuccessMessage() {
         const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";

        // Ocultar el mensaje despues de 5 segundos
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);
    }
});