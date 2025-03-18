const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const cakeSection = document.getElementById("cakeSection");
const cakeImage = document.getElementById("cakeImage");
const blowBtn = document.getElementById("blowBtn");
const specialMsg = document.getElementById("specialMsg");
const funnyMsg = document.getElementById("funnyMsg");
const funnySong = document.getElementById("funnySong");
const cuteSong = document.getElementById("cuteSong");
const flame = document.getElementById("flame");

let currentSlide = 0;

// Slider logic
nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide < slides.length) {
    document.querySelector(".slides").style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  if (currentSlide === slides.length - 1) {
    nextBtn.textContent = "Ready for Surprise? 🎁";
  }
  if (currentSlide === slides.length) {
    document.querySelector(".slider").style.display = "none";
    cakeSection.classList.remove("hidden");
  }
});

// Blow the candle logic
blowBtn.addEventListener("click", () => {
  blowBtn.style.display = "none";
  
  // Animate flame blowing out
  flame.classList.add("hide");
  
  // Show special message after blowing
  setTimeout(() => {
    specialMsg.classList.remove("hidden");
  }, 1500);
  
  // Start emoji rain
  startEmojiRain();
  
  // Play funny birthday song
  funnySong.play();
  
  // Show funny message popup
  funnyMsg.classList.remove("hidden");
  
  // Hide funny message after 4 sec, start cute song
  setTimeout(() => {
    funnyMsg.classList.add("hidden");
    cuteSong.play();
  }, 4000);
});

// Emoji rain function
function startEmojiRain() {
  const emojiContainer = document.getElementById("emojiRain");
  const emojis = ["✨", "🌟","🎉", "🎈", "🥳", "💖", "✨", "🌟", "🎶"];
  
  setInterval(() => {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(emoji);
    
    // Remove after fall
    setTimeout(() => {
      emoji.remove();
    }, 5000);
  }, 300);
}
