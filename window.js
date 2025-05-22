window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY === 0) {
        // Cuando está en la parte superior (scroll = 0)
        header.classList.remove('scrolled'); // Logo grande
    } else {
        // Cuando se hace scroll hacia abajo
        header.classList.add('scrolled'); // Logo pequeño
    }
});