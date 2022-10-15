const images = ["0.webp", "1.jpeg", "2.jpeg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector(".background");
bgImage.style.backgroundImage = `url(img/${chosenImage})`;
