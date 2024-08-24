document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');
    const baseNumStars = 100; // Base number of stars for larger screens
    const stars = [];
    let numStars = baseNumStars;

    function updateStarCount() {
        // Reduce the number of stars for smaller screens
        const width = window.innerWidth;
        const height = window.innerHeight;
        if (width < 600) { // Example breakpoint for small screens
            numStars = Math.floor(baseNumStars * 0.5); // 50% of base number
        } else if (width < 900) { // Example breakpoint for medium screens
            numStars = Math.floor(baseNumStars * 0.75); // 75% of base number
        } else {
            numStars = baseNumStars; // Full number of stars for larger screens
        }
    }

    function createStar() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speed: Math.random() * 0.5 + 0.1
        };
    }

    function initializeStars() {
        stars.length = 0; // Clear existing stars
        for (let i = 0; i < numStars; i++) {
            stars.push(createStar());
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function updateStars() {
        stars.forEach(star => {
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
        });
    }

    function animate() {
        drawStars();
        updateStars();
        requestAnimationFrame(animate);
    }

    function onResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        updateStarCount();
        initializeStars();
    }

    // Initial setup
    onResize();
    animate();

    // Update on resize
    window.addEventListener('resize', onResize);
});
