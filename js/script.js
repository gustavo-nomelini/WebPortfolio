document.addEventListener('DOMContentLoaded', function() {
    const headerHeight = document.querySelector('header').offsetHeight; // Get the header height



    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight, // Adjust for header height
                    behavior: 'smooth'
                });
            } else {
                console.warn(`No element found for selector: ${targetId}`);
            }
        });
    });

    // Intersection Observer for scroll animations
    const observers = document.querySelectorAll('.observe');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                // Optionally remove class if section is out of view
                entry.target.classList.remove('in-view');
            }
        });
    });

    observers.forEach(observerElement => {
        observer.observe(observerElement);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const nameContainer = document.getElementById('name-container');
    const createSparkle = () => {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        // Random position within the name container
        const left = Math.random() * nameContainer.offsetWidth;
        const top = Math.random() * nameContainer.offsetHeight;
        sparkle.style.left = `${left}px`;
        sparkle.style.top = `${top}px`;
        nameContainer.appendChild(sparkle);

        // Remove sparkle after animation ends
        setTimeout(() => {
            nameContainer.removeChild(sparkle);
        }, 1000); // match the animation duration
    };

    // Create sparkles at random intervals
    setInterval(createSparkle, 100); // create a sparkle every 300ms
});