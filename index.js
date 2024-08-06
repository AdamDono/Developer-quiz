document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const selectMenu = document.getElementById('select-menu');

    selectMenu.addEventListener('change', function() {
        console.log(`Selected: ${this.value}`);
    
    });
});