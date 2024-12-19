// VENTANA EN CONSTRUCCION
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el enlace de la calculadora
    const calculadoraLink = document.getElementById("enContruccion-link");

    // Comprobamos si el enlace existe
    if (calculadoraLink) {
        // Añadimos el evento de clic al enlace
        calculadoraLink.addEventListener("click", function(event) {
            // Prevenimos que el enlace realice su acción (abrir otra página)
            event.preventDefault();
            
            // Mostramos la ventana emergente
            alert("¡Esta parte del sitio está en construcción!");
        });
    }
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
