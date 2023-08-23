document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const aboutMeOverlay = document.querySelector("#acerca-de-mi .overlay");
    const servicesOverlay = document.querySelector("#servicios .overlay2");
    const habilidadesOverlay = document.querySelector("#habilidades .overlay3");
    const proyectosOverlay = document.querySelector("#proyectos .overlay4");

    function handleOverlayScroll(elementId, overlayElement, triggerOffset) {
        const scrollPosition = window.scrollY;
        const sectionElement = document.getElementById(elementId);
        const sectionHeight = sectionElement.offsetHeight;
        const triggerPosition = sectionElement.offsetTop + sectionHeight * triggerOffset;

        if (scrollPosition >= triggerPosition) {
            overlayElement.style.opacity = "0";
        } else {
            overlayElement.style.opacity = "1";
        }
    }

    window.addEventListener("scroll", function() {
        handleOverlayScroll("acerca-de-mi", aboutMeOverlay, 0.48);
        handleOverlayScroll("servicios", servicesOverlay, 0.48);
        handleOverlayScroll("habilidades", habilidadesOverlay, 0.48);
        handleOverlayScroll("proyectos", proyectosOverlay, 0.48);

        if (window.scrollY > 0) {
            navbar.classList.add("navbar-scrolled");

            // Cambia el color de la primera letra del título
            const navbarBrand = document.querySelector(".navbar-brand");
            navbarBrand.style.setProperty("--first-letter-color", "#ffffff"); // Cambia el color al hacer scroll
        } else {
            navbar.classList.remove("navbar-scrolled");

            // Restaura el color original de la primera letra del título
            const navbarBrand = document.querySelector(".navbar-brand");
            navbarBrand.style.setProperty("--first-letter-color", "#ff5e00"); // Cambia el color original
        }
    });
    
    const presentacionSection = document.querySelector(".presentacion-section");

    if (presentacionSection) {
        const floatingShapesContainer = document.createElement("div");
        floatingShapesContainer.classList.add("floating-shapes-container");

        const shapeTypes = ["circle", "square"];
        const shapesData = [];

        for (let i = 0; i < 15; i++) {
            const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            const shape = document.createElement("div");
            shape.classList.add("floating-shape", `floating-${shapeType}`);

            // Generar posición y dirección aleatoria
            const horizontalPosition = Math.random() * (window.innerWidth - 120); // Aumentar rango
            const verticalPosition = Math.random() * (window.innerHeight - 120); // Aumentar rango
            const directionX = Math.random() < 0.5 ? 1 : -1;
            const directionY = Math.random() < 0.5 ? 1 : -1;

            shapesData.push({
                element: shape,
                posX: horizontalPosition,
                posY: verticalPosition,
                dirX: directionX,
                dirY: directionY,
            });

            shape.style.left = `${horizontalPosition}px`;
            shape.style.top = `${verticalPosition}px`;
            shape.style.animationDuration = `${Math.random() * 800 + 700}s`;
            floatingShapesContainer.appendChild(shape);
        }

        presentacionSection.appendChild(floatingShapesContainer);


        function updateShapesPosition() {
            for (let i = 0; i < shapesData.length; i++) {
                const shapeData = shapesData[i];
                shapeData.posX += shapeData.dirX * 0.1;
                shapeData.posY += shapeData.dirY * 0.1;

                for (let j = 0; j < shapesData.length; j++) {
                    if (i !== j) {
                        const otherShape = shapesData[j];
                        const dx = shapeData.posX - otherShape.posX;
                        const dy = shapeData.posY - otherShape.posY;
                        const distance = Math.sqrt(dx * dx + dy * dy);
        
                        if (distance < 100) { // Ajusta el valor para cambiar el umbral de colisión
                            shapeData.dirX *= -1; // Invertir dirección X para rebotar
                            shapeData.dirY *= -1; // Invertir dirección Y para rebotar
                        }
                    }
                }

                if (shapeData.posX < 0 || shapeData.posX > window.innerWidth - 50) {
                    shapeData.dirX *= -1;
                }

                if (shapeData.posY < 0 || shapeData.posY > window.innerHeight - 50) {
                    shapeData.dirY *= -1;
                }

                shapeData.element.style.left = `${shapeData.posX}px`;
                shapeData.element.style.top = `${shapeData.posY}px`;
            }

            requestAnimationFrame(updateShapesPosition);
        }

        function activateFloatingShapes() {
            floatingShapesContainer.style.display = "block";
            updateShapesPosition();
        }

        function deactivateFloatingShapes() {
            floatingShapesContainer.style.display = "none";
        }

        activateFloatingShapes();

        window.addEventListener("scroll", function () {
            const nextSection = document.querySelector(".siguiente-seccion");
            if (nextSection && window.scrollY >= nextSection.offsetTop) {
                deactivateFloatingShapes();
                window.removeEventListener("scroll", this);
            }
        });
    }
});




const typedTextElement = document.querySelector('.typed-text');
const targetWord = 'Tecnologías de la Información';
let currentCharacterIndex = 0;
let isDeleting = false;

function typeAndDelete() {
    const currentText = targetWord.substring(0, currentCharacterIndex);

    typedTextElement.textContent = currentText;

    if (!isDeleting && currentCharacterIndex === targetWord.length) {
        isDeleting = true;
        setTimeout(typeAndDelete, 500);
    } else if (isDeleting && currentCharacterIndex === 0) {
        isDeleting = false;
        setTimeout(typeAndDelete, 500);
    } else {
        setTimeout(typeAndDelete, isDeleting ? 100 : 200);
    }

    if (!isDeleting) {
        currentCharacterIndex = (currentCharacterIndex + 1) % (targetWord.length + 1);
    } else {
        currentCharacterIndex = Math.max(0, currentCharacterIndex - 1);
    }
}

typeAndDelete();



document.addEventListener("DOMContentLoaded", function() {
    const enviarButton = document.getElementById("enviar");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const mensajeInput = document.getElementById("mensaje");
    const contactForm = document.getElementById("contact-form");


});


document.addEventListener("DOMContentLoaded", function() {
    const overlays = document.querySelectorAll(".overlay-item");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentIndex = 0;

    const showOverlay = (index) => {
        overlays.forEach((overlay, i) => {
            overlay.classList.remove("active");
        });

        overlays[index].classList.add("active");
    };

    // Mostrar el primer overlay en pantallas pequeñas por defecto
    showOverlay(currentIndex);

    // Agregar lógica para mostrar / ocultar los botones en pantallas reducidas
    const handleResize = () => {
        if (window.innerWidth <= 950) {
            prevButton.style.display = "block";
            nextButton.style.display = "block";
        } else {
            prevButton.style.display = "none";
            nextButton.style.display = "none";
            showOverlay(currentIndex);
        }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            showOverlay(currentIndex);
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < overlays.length - 1) {
            currentIndex++;
            showOverlay(currentIndex);
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const navbarCollapse = document.querySelector(".navbar-collapse");
            navbarCollapse.classList.remove("show"); // Quita la clase 'show'
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const overlayItems = document.querySelectorAll(".overlay-itemH");
    const prevButton = document.querySelector(".prev-buttonH");
    const nextButton = document.querySelector(".next-buttonH");
    let currentIndex = 0;

    const showOverlayItem = (index) => {
        overlayItems.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
    };

    showOverlayItem(currentIndex);

    prevButton.addEventListener("click", () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        showOverlayItem(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = Math.min(currentIndex + 1, overlayItems.length - 1);
        showOverlayItem(currentIndex);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const overlayItems = document.querySelectorAll(".overlay-itemP");
    const prevButton = document.querySelector(".prev-buttonP");
    const nextButton = document.querySelector(".next-buttonP");
    let currentIndex = 0;
    let isResponsive = window.innerWidth <= 768;

    const showOverlayItem = (index) => {
        overlayItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    };

    const handleResize = () => {
        isResponsive = window.innerWidth <= 768;
        if (isResponsive) {
            showOverlayItem(currentIndex);
        } else {
            overlayItems.forEach(item => {
                item.classList.add("active");
            });
        }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    prevButton.addEventListener("click", () => {
        if (isResponsive) {
            currentIndex = Math.max(currentIndex - 1, 0);
            showOverlayItem(currentIndex);
        }
    });

    nextButton.addEventListener("click", () => {
        if (isResponsive) {
            currentIndex = Math.min(currentIndex + 1, overlayItems.length - 1);
            showOverlayItem(currentIndex);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleFormButton = document.getElementById("toggle-form-button");
    const contactForm = document.getElementById("contact-form");
    const contactInfo = document.querySelector(".contact-info");
    let isFormVisible = true;

    const handleToggleForm = () => {
        isFormVisible = !isFormVisible;
        if (isFormVisible) {
            contactForm.style.display = "none";
            contactInfo.style.display = "block";
            toggleFormButton.textContent = "Mostrar formulario";
        } else {
            contactForm.style.display = "block";
            contactInfo.style.display = "none";
            toggleFormButton.textContent = "Mostrar información";
        }
    };

    toggleFormButton.addEventListener("click", handleToggleForm);

    // Obtener el ancho de la ventana
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Verificar si estamos en el modo responsive (ancho menor o igual a 768px)
    if (windowWidth <= 768) {
        // Ocultar el formulario al inicio
        contactForm.style.display = "none";
    }
});
