document.addEventListener("DOMContentLoaded", function () {

    // Toggle para menú móvil
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Cambiar icono de barras a cruz
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar menú al hacer click en un enlace (Móviles)
    const links = document.querySelectorAll('.nav-links li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Manejo del formulario de cotización (Simulación)
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Evita recargar la página

            // Obtener valores
            const nombre = document.getElementById('nombre').value;
            const servicio = document.getElementById('servicio').value;

            // Alerta de confirmación profesional
            alert(`¡Gracias por tu interés, ${nombre}! Hemos recibido tu solicitud para el servicio de ${servicio}. Un asesor de Inova Vitro se pondrá en contacto contigo muy pronto.`);

            // Limpiar formulario
            quoteForm.reset();
        });
    }
});