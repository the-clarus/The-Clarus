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
        "blog.html",  
        "blog.html",
        "blog.html",
        "blog.html"
        
    ];

    const randomIndex = Math.floor(Math.random() * blogLinks.length);
    window.location.href = blogLinks[randomIndex];
}



 document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});



let input = '';
        document.addEventListener('keydown', function(e) {
            input += e.key;
            if (input.endsWith('clarus')) {
                document.body.classList.toggle('easter-egg');
                input = ''; 
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
                e.stopPropagation(); 

                
                const overlay = document.createElement('div');
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; 
                overlay.style.backdropFilter = 'blur(10px)'; 
                overlay.style.zIndex = '999';
                overlay.id = 'backgroundOverlay';

                
                const imagePopup = document.createElement('img');
                imagePopup.src = 'dogcow.png'; 
                imagePopup.style.position = 'fixed';
                imagePopup.style.top = '50%';
                imagePopup.style.left = '50%';
                imagePopup.style.transform = 'translate(-50%, -50%)';
                imagePopup.style.zIndex = '1000';
                imagePopup.style.width = '50%'; 
                imagePopup.style.height = 'auto';
                imagePopup.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.7)';
                imagePopup.id = 'imagePopup'; 

                document.body.appendChild(overlay);
                document.body.appendChild(imagePopup);

                
                document.addEventListener('click', function () {
                    document.body.removeChild(imagePopup);
                    document.body.removeChild(overlay);
                }, { once: true }); 
            });
        });
    });


    




        
    