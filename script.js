document.addEventListener("DOMContentLoaded", function () {
    const tituloInicio = document.querySelector('.titulo-inicio');
    const subtituloInicio = document.getElementById('subtitulo-inicio');
    const ventanas = document.querySelectorAll('.ventana');
    const ventanasSubtitulo = document.querySelector('.ventanas-subtitulo');
    let enDispositivoMovil = window.innerWidth <= 768;

    // Función para mostrar subtítulo específico
    const mostrarSubtitulo = (ventana) => {
        tituloInicio.style.opacity = 0; // Ocultar título
        subtituloInicio.textContent = ventana.getAttribute('data-subtitulo');
        subtituloInicio.style.opacity = 1; // Mostrar subtítulo
    };

    // Función para restaurar el título original
    const restaurarTitulo = () => {
        tituloInicio.style.opacity = 1; // Mostrar título
        subtituloInicio.style.opacity = 0; // Ocultar subtítulo
    };

    // Eventos para cada botón
    ventanas.forEach(ventana => {
        if (!enDispositivoMovil) {
            // Evento hover en desktop
            ventana.addEventListener('mouseover', () => mostrarSubtitulo(ventana));
            ventana.addEventListener('mouseout', restaurarTitulo);
        } else {
            // Evento click en móvil
            ventana.addEventListener('click', () => {
                if (subtituloInicio.style.opacity === "0") {
                    mostrarSubtitulo(ventana);
                } else {
                    restaurarTitulo();
                }
            });
        }
    });

    // Quitar los botones al desplazarse
    window.addEventListener('scroll', () => {
        const headerHeight = document.querySelector('.inicio').offsetHeight;
        if (window.scrollY > headerHeight) {
            ventanasSubtitulo.style.display = 'none'; // Ocultar botones
        } else {
            ventanasSubtitulo.style.display = 'flex'; // Mostrar botones
        }
    });

    // Detectar cambio de tamaño para modo de dispositivo
    window.addEventListener('resize', () => {
        enDispositivoMovil = window.innerWidth <= 768;
    });
});














// Seleccionar todas las imágenes en el carrusel
document.querySelectorAll('.carousel-image').forEach(img => {
    img.addEventListener('click', function () {
        // Obtener el elemento de la descripción en el mismo carrusel-item
        const caption = this.nextElementSibling;
        // Alternar la visibilidad de la descripción
        caption.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.animate-image');
    const titles = document.querySelectorAll('.animate-title');
    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    images.forEach(image => {
        observer.observe(image);
    });

    titles.forEach(title => {
        observer.observe(title);
    });
});











// Función para eliminar el botón de WhatsApp
function removeWhatsApp() {
    const whatsappContainer = document.getElementById("whatsapp-container");
    if (whatsappContainer) {
        whatsappContainer.remove();
    }
}
