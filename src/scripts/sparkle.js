/* SPARKLES */
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

  // Function to count completed quest items
  function countCompletedQuestItems() {
    const questItems = document.querySelectorAll('.quest-item');
    const completedQuestItems = Array.from(questItems).filter((item) =>
      item.classList.contains('completed')
    );
    return completedQuestItems.length;
  }

  // Function to calculate the progress percentage based on completed quest items
  function calculateProgressPercentage() {
    const completedQuestItems = countCompletedQuestItems();
    const totalQuestItems = 50;
    const progressPercentage = (completedQuestItems / totalQuestItems) * 100;
    return progressPercentage;
  }

  // Update the progress circle with the calculated progress percentage
  function updateProgressCircle(progressPercentage) {
    const progressBar = document.getElementById('number');
    progressBar.innerHTML = Math.round(progressPercentage) + '%';

    const progressCircle = document.querySelector('circle');
    const circleLength = 472; // The value of stroke-dasharray
    const offset = (circleLength * (100 - progressPercentage)) / 100;

    progressCircle.style.strokeDashoffset = offset;
  }

  // Add an event listener for each quest item to toggle the 'completed' class when clicked
  // and call the updateProgressCircle function
  document.querySelectorAll('.quest-item').forEach((questItem) => {
    questItem.addEventListener('click', () => {
      questItem.classList.toggle('completed');
      
      const progressPercentage = calculateProgressPercentage();
      updateProgressCircle(progressPercentage);

      if (questItem.classList.contains('completed')) {
        addParticle(null, questItem);
      }
    });
  });

  // Initialize the progress circle
  const initialProgressPercentage = calculateProgressPercentage();
  updateProgressCircle(initialProgressPercentage);

  // Start animating particles
  animateParticles();

  // Update the canvas size when the window is resized
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});


/* VIDEO CHANGES DEPENDING ON SCREEN SIZE */

function updateVideoSource() {
  const videoElement = document.querySelector('.video-container video');
  const sourceElement = document.querySelector('.video-container video source');
  
  if (window.innerWidth >= 990) {
    sourceElement.src = "video/hero.mp4";
  } else {
    sourceElement.src = "video/hero-m.mp4";
  }
  
  videoElement.load();
}

window.addEventListener('load', updateVideoSource);
window.addEventListener('resize', updateVideoSource);/* SPARKLES */
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
  
    // Function to count completed quest items
    function countCompletedQuestItems() {
      const questItems = document.querySelectorAll('.quest-item');
      const completedQuestItems = Array.from(questItems).filter((item) =>
        item.classList.contains('completed')
      );
      return completedQuestItems.length;
    }
  
    // Function to calculate the progress percentage based on completed quest items
    function calculateProgressPercentage() {
      const completedQuestItems = countCompletedQuestItems();
      const totalQuestItems = 50;
      const progressPercentage = (completedQuestItems / totalQuestItems) * 100;
      return progressPercentage;
    }
  
    // Update the progress circle with the calculated progress percentage
    function updateProgressCircle(progressPercentage) {
      const progressBar = document.getElementById('number');
      progressBar.innerHTML = Math.round(progressPercentage) + '%';
  
      const progressCircle = document.querySelector('.progress-circle');
      const circumference = 2 * Math.PI * 70; // 2 * 3.1415 * 70
      const offset = circumference - (progressPercentage / 100) * circumference;
    
      progressCircle.setAttribute("stroke-dashoffset", offset);
      if (progressPercentage === 0) progressCircle.setAttribute("stroke-dashoffset", circumference);

      
    }
  
    // Add an event listener for each quest item to toggle the 'completed' class when clicked
    // and call the updateProgressCircle function
    document.querySelectorAll('.quest-item').forEach((questItem) => {
      questItem.addEventListener('click', () => {
        questItem.classList.toggle('completed');
        
        const progressPercentage = calculateProgressPercentage();
        updateProgressCircle(progressPercentage);
  
        if (questItem.classList.contains('completed')) {
          addParticle(null, questItem);
        }
      });
    });
  
    // Initialize the progress circle
    const initialProgressPercentage = calculateProgressPercentage();
    updateProgressCircle(initialProgressPercentage);
  
    // Start animating particles
    animateParticles();
  
    // Update the canvas size when the window is resized
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  });