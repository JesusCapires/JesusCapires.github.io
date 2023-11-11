document.addEventListener("DOMContentLoaded", function() {
    const overlays = document.querySelectorAll(".overlayapp");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentIndex = 0;

    // Función para mostrar el overlay actual
    const showOverlay = (index) => {
        overlays.forEach((overlay, i) => {
            overlay.style.opacity = i === index ? 1 : 0;
            overlay.style.transform = `translateX(${100 * (i - index)}%)`;
            overlay.style.zIndex = i === index ? 999 : 1;
        });
    };

    // Mostrar el primer overlay
    showOverlay(currentIndex);

    // Función para mostrar el siguiente overlay
    const showNextOverlay = () => {
        currentIndex = (currentIndex + 1) % overlays.length;
        showOverlay(currentIndex);
    };

    // Botón "Anterior"
    prevButton.addEventListener("click", () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        showOverlay(currentIndex);
    });

    // Botón "Siguiente"
    nextButton.addEventListener("click", () => {
        showNextOverlay();
    });

    // Cambiar de overlay automáticamente cada 20 segundos
    setInterval(() => {
        showNextOverlay();
    }, 15000); // 20000 milisegundos = 20 segundos
});


document.addEventListener("DOMContentLoaded", function() {
    const overlays = document.querySelectorAll(".overlaygal");
    const prevButton2 = document.querySelector(".prev-button2");
    const nextButton2 = document.querySelector(".next-button2");

    let currentIndex = 0;

    // Función para mostrar el overlay actual
    const showOverlay = (index) => {
        overlays.forEach((overlay, i) => {
            overlay.style.opacity = i === index ? 1 : 0;
            overlay.style.transform = `translateX(${100 * (i - index)}%)`;
            overlay.style.zIndex = i === index ? 999 : 1;
        });
    };

    // Mostrar el primer overlay
    showOverlay(currentIndex);

    // Función para mostrar el siguiente overlay
    const showNextOverlay = () => {
        currentIndex = (currentIndex + 1) % overlays.length;
        showOverlay(currentIndex);
    };

    // Botón "Anterior"
    prevButton2.addEventListener("click", () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        showOverlay(currentIndex);
    });

    // Botón "Siguiente"
    nextButton2.addEventListener("click", () => {
        showNextOverlay();
    });

    // Cambiar de overlay automáticamente cada 20 segundos
    setInterval(() => {
        showNextOverlay();
    }, 3000); // 20000 milisegundos = 20 segundos
});




