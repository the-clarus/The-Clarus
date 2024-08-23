//START trace mouse scrolling
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Add event listener for mousedown (when mouse button is pressed)
document.addEventListener('mousedown', function() {
    document.body.classList.add('holding');
});

// Add event listener for mouseup (when mouse button is released)
document.addEventListener('mouseup', function() {
    document.body.classList.remove('holding');
});

// Optionally, handle touch events for mobile devices
document.addEventListener('touchstart', function() {
    document.body.classList.add('holding');
});

document.addEventListener('touchend', function() {
    document.body.classList.remove('holding');
});
//END trace mouse scrolling




function filterBlogs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const blogPosts = document.getElementsByClassName('blog-post');

    for (let i = 0; i < blogPosts.length; i++) {
        const title = blogPosts[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.includes(searchInput)) {
            blogPosts[i].style.display = '';
        } else {
            blogPosts[i].style.display = 'none';
        }
    }
}

function redirectToRandomBlog() {
    const blogLinks = [
        "blog.html",  // Replace with actual blog URLs
        "blog.html",
        "blog.html",
        "blog.html"
        // Add more blog URLs as needed
    ];

    const randomIndex = Math.floor(Math.random() * blogLinks.length);
    window.location.href = blogLinks[randomIndex];
}


//START no selection or right click
 document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});
//END no selection or right click

// Easter egg activation
let input = '';
        document.addEventListener('keydown', function(e) {
            input += e.key;
            if (input.endsWith('clarus')) {
                document.body.classList.toggle('easter-egg');
                input = ''; // Reset input after activation
            }
        });



        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('scrolled', window.scrollY > 50);
        });

        document.addEventListener('mousedown', function() {
            document.body.classList.add('holding');
        });

        document.addEventListener('mouseup', function() {
            document.body.classList.remove('holding');
        });

        document.addEventListener('touchstart', function() {
            document.body.classList.add('holding');
        });

        document.addEventListener('touchend', function() {
            document.body.classList.remove('holding');
        });


    

      

    document.addEventListener('DOMContentLoaded', function () {
        const postImages = document.querySelectorAll('.post-image');

        postImages.forEach(image => {
            image.addEventListener('click', function (e) {
                e.stopPropagation(); // Prevent the click event from propagating to the document

                // Create a background overlay
                const overlay = document.createElement('div');
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Dark background with some transparency
                overlay.style.backdropFilter = 'blur(10px)'; // Apply blur effect
                overlay.style.zIndex = '999';
                overlay.id = 'backgroundOverlay';

                // Create the enlarged image popup
                const imagePopup = document.createElement('img');
                imagePopup.src = 'dogcow.png'; // Replace with your image source
                imagePopup.style.position = 'fixed';
                imagePopup.style.top = '50%';
                imagePopup.style.left = '50%';
                imagePopup.style.transform = 'translate(-50%, -50%)';
                imagePopup.style.zIndex = '1000';
                imagePopup.style.width = '50%'; // Make the image larger, adjust as needed
                imagePopup.style.height = 'auto';
                imagePopup.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.7)';
                imagePopup.id = 'imagePopup'; // Assign an ID to the image

                document.body.appendChild(overlay);
                document.body.appendChild(imagePopup);

                // Add a click event to close the image popup and remove the blur effect
                document.addEventListener('click', function () {
                    document.body.removeChild(imagePopup);
                    document.body.removeChild(overlay);
                }, { once: true }); // Ensure the event listener is removed after one use
            });
        });
    });


    




        
    