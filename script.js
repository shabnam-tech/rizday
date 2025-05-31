function revealGift() {
  const box = document.getElementById("giftBox");
  box.classList.remove("hidden");
  box.style.animation = "popUp 0.6s ease";
}
  function closeGift() {
    document.getElementById("giftBox").classList.add("hidden");
  }

function generateHoroscope() {
  const horoscopes = [
    "You will be the happiest person today akkoo🍫",
    "You will ace your next exams/tests🤗",
    "Your cuteness levels will reach peak today wuhuu🌟",
    "Todayy your laugh will make someone’s dayy💖",
    "A magical moment is about to happen✨",
    "One of your wishes is gonna come true todayy broo",
    "You are gonna get something that's ur favv WOW"
  ];

  const random = Math.floor(Math.random() * horoscopes.length);
  const message = horoscopes[random];

  const result = document.getElementById("horoscopeResult");
  result.innerText = message;

  const overlay = document.getElementById("horoscopeOverlay");
  overlay.classList.remove("hidden");

  // Auto-hide after 5 seconds (optional)
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 5000);
}