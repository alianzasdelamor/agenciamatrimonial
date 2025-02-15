// Esperar a que el documento HTML esté completamente cargado y listo
document.addEventListener("DOMContentLoaded", function () {
    // ⚠️ CÓDIGO NUEVO PARA FIJAR SCROLL
    window.scrollTo(0, 0);
    history.scrollRestoration = "manual";
    /*
    📌 INICIALIZACIÓN DE ANIMACIONES CON AOS
    AOS (Animate On Scroll) es una biblioteca para animaciones al hacer scroll
    Configuramos sus parámetros:
    - duration: Duración de la animación en milisegundos (1 segundo)
    - once: La animación solo se reproduce una vez
    - delay: Retardo antes de que comience la animación
    - easing: Tipo de suavizado de la animación
    - mirror: No repetir la animación al volver a scroll
    */
    AOS.init({
        duration: 1000,         // 1 segundo de duración
        once: true,             // Animación única por elemento
        delay: 150,             // 150ms de retardo inicial
        easing: 'ease-in-out',  // Movimiento suave al empezar y terminar
        mirror: false           // No animar al hacer scroll inverso
    });

    // 🎯 BOTÓN "VOLVER ARRIBA"
    const backToTopButton = document.getElementById("back-to-top");

    // Detectar cuando el usuario hace scroll
    window.addEventListener("scroll", function () {
        // Mostrar el botón solo si el scroll vertical es mayor a 300px
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Acción al hacer clic en el botón
    backToTopButton.addEventListener("click", function () {
        // Scroll suave hasta la parte superior de la página
        window.scrollTo({ 
            top: 0,              // Posición final (0px = inicio)
            behavior: "smooth"  // Desplazamiento animado
        });
    });

   // 🌄 EFECTO PARALLAX EN LA IMAGEN PRINCIPAL (VERSIÓN SIMPLIFICADA)
window.addEventListener("scroll", function () {
    const img = document.querySelector(".hero-img img");
    
    if (img) {
        let scrollY = window.scrollY;
        // Solo aplicamos desplazamiento vertical (quitamos rotateZ)
        img.style.transform = `translateY(${scrollY * 0.03}px)`; 
    }
});
    
    // Preguntas y respuestas
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            this.classList.toggle("active");
            const answer = this.nextElementSibling;
            answer.style.display = (answer.style.display === "block") ? "none" : "block";
        });
    });

    
    // 🖱️ SCROLL SUAVE PARA ENLACES DE NAVEGACIÓN
    // Seleccionamos todos los enlaces que empiezan con #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // A cada enlace le añadimos un evento click
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evitamos el comportamiento normal del enlace
            
            // Hacemos scroll suave hasta el elemento objetivo
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Animación de desplazamiento
            });
        });
    });
});
