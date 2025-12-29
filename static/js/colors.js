// Random color selection for top line and navigation
(function() {
    const colors = ['#ffd700', '#ff4444', '#4444ff', '#44ff44']; // yellow, red, blue, green
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply to top line
    const topLine = document.querySelector('.top-line');
    if (topLine) {
        topLine.style.backgroundColor = randomColor;
    }
    
    // Apply to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.style.color = randomColor;
    });
})();

