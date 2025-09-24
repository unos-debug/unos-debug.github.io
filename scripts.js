document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('side-menu');

    hamburger.addEventListener('click', function() {
        sideMenu.classList.toggle('open');
        hamburger.classList.toggle('open');
    });

    // Optional: close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (sideMenu.classList.contains('open') &&
            !sideMenu.contains(e.target) &&
            !hamburger.contains(e.target)) {
            sideMenu.classList.remove('open');
            hamburger.classList.remove('open');
        }
    });
});
