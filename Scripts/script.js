const root = "/WSOA3028_2542976";
const pages = [
  { name: "Index", href: `${root}/index.html` },
  {
    name: "Portfolio",
    href: `${root}/Pages/Portfolio/portfolio.html`,
      },

  { 
    name: "About Me", 
    href: `${root}/Pages/About Me/about.html`,
    
  },

  { name: "Essays", href: `${root}/Pages/Essays/essay.html` },
  {
    name: "Blogposts",
    href: `${root}/Pages/Blogs/blog.html`,
    
  },
  { name: "Design", href: `${root}/Pages/Design/design.html` },
  {
    name: "Playground",
    href: `${root}/Pages/TheHub/playground.html`,
    
  }
];

export function initialise(currentPageName) {
  const nav = document.querySelector("header > nav");
  const ul = document.createElement("ul");

  pages.forEach(page => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.innerText = page.name;
    if (page.name === currentPageName) {
      anchor.classList.add('current-page');
    } else {
      anchor.setAttribute('href', page.href);
    }
    li.appendChild(anchor);

    if (page.subPages) {
      const subUl = document.createElement("ul");
      page.subPages.forEach(subPage => {
        const subLi = document.createElement("li");
        const subAnchor = document.createElement("a");
        subAnchor.innerText = subPage.name;
        subAnchor.setAttribute('href', subPage.href);
        subLi.appendChild(subAnchor);

        if (subPage.subPages) {
          const subSubUl = document.createElement("ul");
          subPage.subPages.forEach(subSubPage => {
            const subSubLi = document.createElement("li");
            const subSubAnchor = document.createElement("a");
            subSubAnchor.innerText = subSubPage.name;
            subSubAnchor.setAttribute('href', subSubPage.href);
            subSubLi.appendChild(subSubAnchor);
            subSubUl.appendChild(subSubLi);
          });
          subLi.appendChild(subSubUl);
        }
        subUl.appendChild(subLi);
      });
      li.appendChild(subUl);
    }
    ul.appendChild(li);
  });

  nav.appendChild(ul);
}



const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    function Particle() {
      this.x = canvas.width / 2;
      this.y = canvas.height / 2;
      this.vx = Math.random() * 2 - 1;
      this.vy = Math.random() * 2 - 1;
      this.radius = Math.random() * 4 + 2;
      this.color = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.7)`;
    }

    Particle.prototype.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }

    Particle.prototype.update = function() {
      this.x += this.vx;
      this.y += this.vy;
    
      // Reduce alpha (opacity) over time
      this.color = `rgba(${this.color},${Math.max(0, parseFloat(this.color.split(',')[3]) - 0.01)})`;
    
      // Remove particle if its alpha is zero
      if (parseFloat(this.color.split(',')[3]) <= 0) {
        particles.splice(particles.indexOf(this), 1);
        return;
      }
    
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.vx = -this.vx;
      }
    
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.vy = -this.vy;
      }
    }

    function createParticles() {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
    }

    createParticles();
    animate();

    // Interactive behavior
    canvas.addEventListener('mousemove', function(event) {
      particles.forEach(particle => {
        let dx = event.clientX - particle.x;
        let dy = event.clientY - particle.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          particle.vx = dx / 10;
          particle.vy = dy / 10;
        }
      });
    }); 