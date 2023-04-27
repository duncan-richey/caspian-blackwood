function toggleMute() {
  const backgroundMusic = document.getElementById('background-music');
  backgroundMusic.muted = !backgroundMusic.muted;
}

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
window.addEventListener('resize', updateVideoSource);

