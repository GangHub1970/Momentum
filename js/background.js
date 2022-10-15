const images = ['1.jpeg', '2.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector('.background');
bgImage.style.backgroundImage = `url(img/${chosenImage})`;