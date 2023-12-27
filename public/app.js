
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del video
    var video = document.getElementById("scrollVideo");

    // Opciones para Intersection Observer
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Cuando al menos el 50% del video está en la pantalla
    };

    // Función de devolución de llamada para el Intersection Observer
    var callback = function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // El video está en la pantalla, reproduce
                video.play();
            } else {
                // El video ya no está en la pantalla, pausa
                video.pause();
            }
        });
    };

    // Crea un nuevo Intersection Observer con la función de devolución de llamada y opciones
    var observer = new IntersectionObserver(callback, options);

    // Observa el elemento del video
    observer.observe(video);
});


// video 2

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del video
    var video = document.getElementById("scrollVideo2");

    // Opciones para Intersection Observer
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Cuando al menos el 50% del video está en la pantalla
    };

    // Función de devolución de llamada para el Intersection Observer
    var callback = function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // El video está en la pantalla, reproduce
                video.play();
            } else {
                // El video ya no está en la pantalla, pausa
                video.pause();
            }
        });
    };

    // Crea un nuevo Intersection Observer con la función de devolución de llamada y opciones
    var observer = new IntersectionObserver(callback, options);

    // Observa el elemento del video
    observer.observe(video);
});


//dark mode

const themeToggle = document.getElementById('themeToggle');
const menuIcon = document.getElementById('menuIcon');
const header = document.getElementById('header');
const info = document.getElementById('info');
const tarjeta = document.getElementById('tarjeta');
const parrafo = document.getElementById('forMe')

    let isDarkMode = false;

    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        updateTheme();
    });

    menuIcon.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        updateTheme();
    });

    function updateTheme() {
        const body = document.body;

        if (isDarkMode) {
            body.classList.add('dark-mode');
            header.style.backgroundColor = '#252525';
            info.style.color = '#fff';
            tarjeta.style.backgroundColor = '#252525';
            parrafo.style.color = '#8d8b8b'

            themeToggle.setAttribute('name', 'sunny-outline');
        } else {
            body.classList.remove('dark-mode');
            header.style.backgroundColor = '';
            info.style.color = '';
            tarjeta.style.backgroundColor = '';
            parrafo.style.color = '';
            themeToggle.setAttribute('name', 'moon-outline');
        }
    }
