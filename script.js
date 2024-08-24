document.addEventListener('DOMContentLoaded', function() {
  const blogPosts = [
      {
          title: 'Exploring the Future',
          content: 'The world is changing faster than ever before. Let’s dive into the technologies shaping tomorrow.',
          url: 'blog.html' 
      },
      {
          title: 'AI and You',
          content: 'Artificial Intelligence is not just a buzzword. Learn how it’s revolutionizing our everyday lives.',
          url: 'blog.html' 
      },
      {
          title: 'AI and You',
          content: 'Artificial Intelligence is not just a buzzword. Learn how it’s revolutionizing our everyday lives.',
          url: 'blog.html' 
      },
      {
          title: 'AI and You',
          content: 'Artificial Intelligence is not just a buzzword. Learn how it’s revolutionizing our everyday lives.',
          url: 'blog.html' 
      },
      {
          title: 'AI and You',
          content: 'Artificial Intelligence is not just a buzzword. Learn how it’s revolutionizing our everyday lives.',
          url: 'blog.html' 
      },
      {
          title: 'The Metaverse',
          content: 'A deep dive into the virtual worlds that are becoming as real as our physical reality.',
          url: 'blog.html' 
      }
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

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [],
  FPS = 60,
  starCount = 100, 
  mouse = {
    x: 0,
    y: 0
  };


if (window.innerWidth < 768) {
  starCount = 50; 
}


for (var i = 0; i < starCount; i++) {
stars.push({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 1 + 0.5, 
  vx: Math.random() * 0.5 - 0.25,  
  vy: Math.random() * 0.5 - 0.25
});
}


function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

for (var i = 0; i < stars.length; i++) {
  var s = stars[i];

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
  ctx.fill();
}


ctx.beginPath();
for (var i = 0; i < stars.length; i++) {
  var starI = stars[i];
  ctx.moveTo(starI.x, starI.y);
  if (distance(mouse, starI) < 100) ctx.lineTo(mouse.x, mouse.y); 
  for (var j = 0; j < stars.length; j++) {
    var starII = stars[j];
    if (distance(starI, starII) < 100) {
      ctx.lineTo(starII.x, starII.y);
    }
  }
}
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
for (var i = 0; i < stars.length; i++) {
  var s = stars[i];

  s.x += s.vx;
  s.y += s.vy;

  if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
  if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
}
}


canvas.addEventListener('mousemove', function (e) {
mouse.x = e.clientX;
mouse.y = e.clientY;
});


window.addEventListener('resize', function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
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
          contactButton.textContent = 'THOU HAST DISCOVERED THE KEY(2690)';
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
              window.location.href = 'imdex.html';
          });
      }
  });
});




const secretSequence = ['A', 'M', 'D', 'C'];
    
let userInput = [];


function handleClick(event) {
    if (event.target.classList.contains('part')) {
        const key = event.target.dataset.key.toUpperCase(); 

        
        userInput.push(key);

        
        if (userInput.length > secretSequence.length) {
            userInput.shift();
        }

        
        if (userInput.join('') === secretSequence.join('')) {
            window.location.href = 'about.html'; 
        }
    }
}

document.querySelector('.hoverable').addEventListener('click', handleClick);





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


    




        
    