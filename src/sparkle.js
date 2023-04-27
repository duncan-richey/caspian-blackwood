document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('sparkle-canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = 'rgba(255, 255, 255, 1)';
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.size > 0.1) this.size -= 0.1;
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }

  const particles = [];

  function getElementPositionRelativeToCanvas(element) {
    const rect = element.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    return {
      x: rect.left - canvasRect.left,
      y: rect.top - canvasRect.top,
      width: rect.width,
      height: rect.height,
    };
  }

  function addParticle(e, questItem) {
    const { x, y, width, height } =
      getElementPositionRelativeToCanvas(questItem);

    for (let i = 0; i < 300; i++) {
      const particleX = x + Math.random() * width;
      const particleY = y + Math.random() * height;
      particles.push(new Particle(particleX, particleY));
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      if (particles[i].size <= 0.1) {
        particles.splice(i, 1);
        i--;
      }
    }

    requestAnimationFrame(animateParticles);
  }

  const questLists = document.querySelectorAll('.quest-list');

  questLists.forEach((questList) => {
    questList.addEventListener('click', (event) => {
      if (
        event.target.classList.contains('quest-item') &&
        event.target.classList.contains('completed')
      ) {
        addParticle(event, event.target);
      }
    });
  });

  animateParticles();
});
