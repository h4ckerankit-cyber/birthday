// Selecting all required elements
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const cakeSection = document.getElementById("cakeSection");
const blowBtn = document.getElementById("blowBtn");
const specialMsg = document.getElementById("specialMsg");
const funnyMsg = document.getElementById("funnyMsg");
const funnySong = document.getElementById("funnySong");
const cuteSong = document.getElementById("cuteSong");
const emojiRain = document.getElementById("emojiRain");
const birthdayMsg = document.getElementById("birthdayMsg");
const birthdayEmojiRain = document.getElementById("birthdayEmojiRain");

let currentSlide = 0;

// Show first slide
showSlide(currentSlide);

// Slider logic
nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide < slides.length) {
    showSlide(currentSlide);
  }
  if (currentSlide === slides.length - 1) {
    nextBtn.textContent = "Ready for Surprise? 🎁";
  }
  if (currentSlide === slides.length) {
    document.querySelector(".slider").style.display = "none";

    // Show Birthday Message
    birthdayMsg.classList.remove("hidden");


    // Show cake after 2 sec
    setTimeout(() => {
      cakeSection.classList.remove("hidden");
    });
  }
});

// Function to show one slide at a time
function showSlide(index) {
  const offset = index * 100;
  document.querySelector(".slides").style.transform = `translateX(-${offset}%)`;
}

// Blow button logic (starts celebration)
blowBtn.addEventListener("click", () => {
  blowBtn.style.display = "none";

  // Start emoji rain for cake section
  startEmojiRain();

  // Play funny birthday song
  funnySong.play();

  // Show special message
  specialMsg.classList.remove("hidden");

  // Show funny message popup
  funnyMsg.classList.remove("hidden");

  // Hide funny message after 9 sec, play cute song
  setTimeout(() => {
    funnyMsg.classList.add("hidden");
    cuteSong.play();
  }, 7000);
});

// General Emoji Rain (Cake Section)
function startEmojiRain() {
  const emojis = ["✨", "🌟","🎉", "🎈", "🥳", "💖", "✨", "🌟", "🎶"];

  setInterval(() => {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 2 + Math.random() * 3 + "s";
    emojiRain.appendChild(emoji);

    // Remove after falling
    setTimeout(() => {
      emoji.remove();
    }, 5000);
  }, 300);
}
