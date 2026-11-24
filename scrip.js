const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const abierto = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", abierto);
    menuToggle.textContent = abierto ? "✕" : "☰";

});

// Cerrar menú al seleccionar una sección

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";

    });

});


// ===================================
// AÑO AUTOMÁTICO DEL FOOTER
// ===================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ===================================
// ANIMACIONES AL DESPLAZARSE
// ===================================

const elementos = document.querySelectorAll(
    ".character-card, .data-card, .about-photo, .about-content"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    elementos.forEach(elemento => {

        elemento.classList.add("reveal");

        observer.observe(elemento);

    });

}