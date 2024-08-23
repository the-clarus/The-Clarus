document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = [
        {
            title: 'Lorem ipsum dolor sit amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            url: 'blog.html' // URL to the blog post page
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          url: 'blog.html' // URL to the blog post page
      },
      {
        title: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        url: 'blog.html' // URL to the blog post page
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'blog.html' // URL to the blog post page
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: 'blog.html' // URL to the blog post page
},
{
  title: 'Lorem ipsum dolor sit amet',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  url: 'blog.html' // URL to the blog post page
},
    ];

    const blogContainer = document.querySelector('.blog-posts');

    blogPosts.forEach(post => {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        
        // Create a link element if URL is provided
        if (post.url) {
            const link = document.createElement('a');
            link.href = post.url;
            link.classList.add('blog-link');
            link.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            `;
            blogPost.appendChild(link);
        } else {
            blogPost.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            `;
        }
        
        blogContainer.appendChild(blogPost);
    });
});

//START background star
// Get the canvas and context
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [],
    FPS = 60,
    starCount = 100, // Reduced star count for performance
    mouse = {
      x: 0,
      y: 0
    };

// Adjust the number of stars based on screen size
if (window.innerWidth < 768) {
    starCount = 25; // Further reduce stars on mobile devices
}

// Create stars
for (var i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1 + 0.5, // Smaller stars
    vx: Math.random() * 0.5 - 0.25,  // Slower movement for less redraws
    vy: Math.random() * 0.5 - 0.25
  });
}

// Draw the scene
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < stars.length; i++) {
    var s = stars[i];

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Connecting lines between stars
  ctx.beginPath();
  for (var i = 0; i < stars.length; i++) {
    var starI = stars[i];
    ctx.moveTo(starI.x, starI.y);
    if (distance(mouse, starI) < 100) ctx.lineTo(mouse.x, mouse.y); // Reduced distance for connections
    for (var j = 0; j < stars.length; j++) {
      var starII = stars[j];
      if (distance(starI, starII) < 100) {
        ctx.lineTo(starII.x, starII.y);
      }
    }
  }
  ctx.lineWidth = 0.1;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'; // Light and thin lines
  ctx.stroke();
}

// Calculate distance between two points
function distance(point1, point2) {
  var xs = point2.x - point1.x;
  var ys = point2.y - point1.y;

  return Math.sqrt(xs * xs + ys * ys);
}

// Update star positions
function update() {
  for (var i = 0; i < stars.length; i++) {
    var s = stars[i];

    s.x += s.vx;
    s.y += s.vy;

    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  }
}

// Handle mouse movement
canvas.addEventListener('mousemove', function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Handle window resize
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Handle touch events for mobile devices
document.addEventListener('touchstart', function (e) {
  mouse.x = e.touches[0].clientX;
  mouse.y = e.touches[0].clientY;
});

// Update and draw the scene continuously
function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}

tick();

//END background star





document.addEventListener('DOMContentLoaded', function() {
    let clickCount = 0;
    const heroContent = document.querySelector('.hero-content');
    const hiddenIcon = document.createElement('div');
    hiddenIcon.style.display = 'none';
    hiddenIcon.style.position = 'fixed';
    hiddenIcon.style.bottom = '20px';
    hiddenIcon.style.right = '20px';
    hiddenIcon.style.width = '4px';
    hiddenIcon.style.height = '4px';
    hiddenIcon.style.backgroundImage = 'url("dogcow.png")'; // Replace with your icon image
    hiddenIcon.style.backgroundSize = 'contain';
    hiddenIcon.style.cursor = 'url(https://cdn.custom-cursor.com/db/4731/32/arrow2699.png), pointer';
    document.body.appendChild(hiddenIcon);

    heroContent.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 4) {
            heroContent.style.display = 'none';
            hiddenIcon.style.display = 'block';
        }
    });

    hiddenIcon.addEventListener('click', function() {
        const imagePopup = document.createElement('img');
        imagePopup.src = 'dogcow.png'; // Replace with your image source
        imagePopup.style.position = 'fixed';
        imagePopup.style.top = '50%';
        imagePopup.style.left = '50%';
        imagePopup.style.transform = 'translate(-50%, -50%)';
        imagePopup.style.zIndex = '1000';
        imagePopup.style.width = '300px'; // Adjust the size as needed
        imagePopup.style.height = 'auto';
        imagePopup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        document.body.appendChild(imagePopup);

        // Optional: add a click event to close the image popup
        imagePopup.addEventListener('click', function() {
            document.body.removeChild(imagePopup);
        });

        // Listen for the phrase "I want" typed
        let typedText = '';
document.addEventListener('keydown', function(event) {
    typedText += event.key.toLowerCase();
    if (typedText.endsWith('?')) {
        showContactButton();
        typedText = ''; // Reset the typed text after detection
    }
});

        function showContactButton() {
            const contactButton = document.createElement('button');
            contactButton.textContent = 'THOU HAST DISCOVERED THE KEY(9568), NOW REACH OUT TO ME';
            contactButton.style.position = 'fixed';
            contactButton.style.top = '70%';
            contactButton.style.left = '50%';
            contactButton.style.transform = 'translate(-50%, -50%)';
            contactButton.style.padding = '15px 30px';
            contactButton.style.fontFamily = "'Press Start 2P', sans-serif";
            contactButton.style.fontSize = '12px';
            contactButton.style.color = '#fff';
            contactButton.style.background = 'linear-gradient(135deg, #00ffcc, #0000ff)';
            contactButton.style.border = 'none';
            contactButton.style.borderRadius = '5px';
            contactButton.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.8)';
            contactButton.style.cursor = 'url(https://cdn.custom-cursor.com/db/4731/32/arrow2699.png), pointer';
            contactButton.style.zIndex = '1001';
            document.body.appendChild(contactButton);

            contactButton.addEventListener('click', function() {
                window.location.href = 'https://www.instagram.com/clarus_dc/';
            });
        }
    });
});



