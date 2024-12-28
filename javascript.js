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
  
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Modal de las paginas cursos
document.getElementById('submitButton').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value.trim();

   
    
    if (!name || !validateEmail(email) || !course) {
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
  };

