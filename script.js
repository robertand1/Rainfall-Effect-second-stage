function createRaindrop() {
  const raindrop = document.createElement("div");
  raindrop.classList.add("raindrop");
  raindrop.style.left = Math.random() * window.innerWidth + "px";
  const duration = Math.random() * 1 + 0.5;
  raindrop.style.animationDuration = duration + "s";
  document.body.appendChild(raindrop);
  setTimeout(() => {
    raindrop.remove();
  }, duration * 1000);
}

function createRaindropW() {
  const raindropW = document.createElement("div");
  raindropW.classList.add("raindropWind");
  raindropW.style.left = Math.random() * (window.innerWidth + 200) - 100 + "px";
  const duration = Math.random() * 0.7 + 0.3;
  raindropW.style.animationDuration = duration + "s";
  document.body.appendChild(raindropW);
  setTimeout(() => {
    raindropW.remove();
  }, duration * 1000);
}

function randomRain() {
  if (Math.random() < 0.5) {
    createRaindrop();
  } else {
    createRaindropW();
  }
  const randomDelay = Math.random() * 140 + 25;
  setTimeout(randomRain, randomDelay);
}

randomRain();
