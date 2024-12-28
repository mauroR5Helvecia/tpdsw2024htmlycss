// VENTANA CALCULADORA EN CONSTRUCCION
document.getElementById('enContruccion-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir la acción predeterminada del enlace
    var myModal = new bootstrap.Modal(document.getElementById('constructionModal'));
    myModal.show(); // Mostrar el modal
  });  

// Transición de imágenes en la sección hero
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.hero .img-container img'); // Seleccionamos todas las imágenes
    let currentIndex = 0; // Índice de la imagen que se mostrará

    // Función para mostrar la imagen actual
    function showImage(index) {
        // Elimina la clase 'fade-in' de todas las imágenes
        images.forEach((img) => img.classList.remove('fade-in'));
        // Añade la clase 'fade-in' solo a la imagen actual
        images[index].classList.add('fade-in');
    }

    // Mostrar la primera imagen al cargar la página
    showImage(currentIndex);

    // Cambiar de imagen cada 4 segundos
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length; // Incrementar el índice y reiniciar si llega al final
        showImage(currentIndex); // Mostrar la imagen correspondiente
    }, 4000); // Cada 4 segundos
});

// Modal contacto en INDEX

document.addEventListener("scroll", function onScroll() {
    const productosSection = document.getElementById("reflexion");
    const modal = new bootstrap.Modal(document.getElementById("contactoModal"));
  
    const sectionPosition = productosSection.getBoundingClientRect();
    const isSectionVisible = sectionPosition.top < window.innerHeight && sectionPosition.bottom > 0;
  
    if (isSectionVisible) {
      modal.show();
      document.removeEventListener("scroll", onScroll); // Eliminar el evento de scroll
    }
  });  

// Modal de las paginas cursos
document.getElementById('submitButton').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value.trim();

    if (!name || !email || !course) {
      const errorModal = new bootstrap.Modal(document.getElementById('statusErrorsModal'));
      errorModal.show();
    } else {
      const successModal = new bootstrap.Modal(document.getElementById('statusSuccessModal'));
      successModal.show();

      let countdown = 10;
      const timer = setInterval(function () {
        countdown--;
        document.getElementById('redirectTimer').innerText = countdown;

        if (countdown === 0) {
          clearInterval(timer);
          window.location.href = 'index.html'; // Redirección al index
        }
      }, 1000);
    }
  });

   // Función para redirigir al index - Boton OK de registro con exito
   function irAlIndex() {
    window.location.href = "index.html"; // Cambia "index.html"
  }
  
  // Funciones de la pagina de contacto

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