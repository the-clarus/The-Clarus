document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = [
        {
            title: 'Lorem ipsum dolor sit amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            url: 'blog.html' 
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          url: 'blog.html' 
      },
      {
        title: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        url: 'blog.html' 
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'blog.html' 
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: 'blog.html' 
},
{
  title: 'Lorem ipsum dolor sit amet',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  url: 'blog.html' 
},
    ];

    const blogContainer = document.querySelector('.blog-posts');

    blogPosts.forEach(post => {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        
        
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


var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

var stars = [],
    FPS = 60,
    starCount = 100, 
    mouse = {
      x: 0,
      y: 0
    };


function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  
  starCount = window.innerWidth < 768 ? 25 : 100;
  initializeStars();
}


function initializeStars() {
  stars = [];
  for (var i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1 + 0.5,
      vx: Math.random() * 0.5 - 0.25,
      vy: Math.random() * 0.5 - 0.25
    });
  }
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ffffff";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
  });

  
  ctx.beginPath();
  stars.forEach(starI => {
    if (distance(mouse, starI) < 100) ctx.lineTo(mouse.x, mouse.y);
    stars.forEach(starII => {
      if (distance(starI, starII) < 100) {
        ctx.lineTo(starII.x, starII.y);
      }
    });
  });
  ctx.lineWidth = 0.1;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.stroke();
}


function distance(point1, point2) {
  var xs = point2.x - point1.x;
  var ys = point2.y - point1.y;
  return Math.sqrt(xs * xs + ys * ys);
}


function update() {
  stars.forEach(s => {
    s.x += s.vx;
    s.y += s.vy;
    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  });
}


let mouseMoveTimeout;
canvas.addEventListener('mousemove', function (e) {
  if (mouseMoveTimeout) clearTimeout(mouseMoveTimeout);
  mouseMoveTimeout = setTimeout(() => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, 100); 
});


let resizeTimeout;
window.addEventListener('resize', function () {
  if (resizeTimeout) clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(resizeCanvas, 100); 
});


document.addEventListener('touchstart', function (e) {
  mouse.x = e.touches[0].clientX;
  mouse.y = e.touches[0].clientY;
});

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}


tick();








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
    hiddenIcon.style.backgroundImage = 'url("IMAGES/dogcow.png")'; 
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
        imagePopup.src = 'IMAGES/dogcow.png'; 
        imagePopup.style.position = 'fixed';
        imagePopup.style.top = '50%';
        imagePopup.style.left = '50%';
        imagePopup.style.transform = 'translate(-50%, -50%)';
        imagePopup.style.zIndex = '1000';
        imagePopup.style.width = '300px'; 
        imagePopup.style.height = 'auto';
        imagePopup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        document.body.appendChild(imagePopup);

        
        imagePopup.addEventListener('click', function() {
            document.body.removeChild(imagePopup);
        });

        
        let typedText = '';
document.addEventListener('keydown', function(event) {
    typedText += event.key.toLowerCase();
    if (typedText.endsWith('?')) {
        showContactButton();
        typedText = ''; 
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
                window.location.href = 'index.html';
            });
        }
    });
});



