let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
let musicStarted = false;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");

  startTyping(slides[index]);
}

function nextSlide() {
  // Start music on first interaction
  if (!musicStarted) {
    const music = document.getElementById("bgMusic");
    music.play();
    musicStarted = true;
  }

  currentSlide++;
  if (currentSlide < slides.length) {
    showSlide(currentSlide);
  }
}

function startTyping(slide) {
  const elements = slide.querySelectorAll(".typewriter");

  elements.forEach(el => {
    const text = el.getAttribute("data-text");
    el.innerHTML = "";
    let i = 0;

    function type() {
      if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 40);
      }
    }

    type();
  });
}

// Initialize first slide
showSlide(currentSlide);