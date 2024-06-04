// Carrosel
const main = document.querySelector("main");
const carouselImages = [
  new Image(),
  new Image(),
  new Image()
];
carouselImages[0].src = "/assets/imagens/pizza-foto1.jpg";
carouselImages[1].src = "/assets/imagens/pizza-foto2.jpg";
carouselImages[2].src = "/assets/imagens/pizza-foto3.webp";

let currentIndex = 0;
let changeImageTime = 10000;

main.style.backgroundImage = `url(${carouselImages[currentIndex].src})`;

setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  main.style.backgroundImage = `url(${carouselImages[currentIndex].src})`;
}, changeImageTime);


const arrowRight = document.querySelector("#arrow-right");
const arrowLeft = document.querySelector("#arrow-left");

arrowRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  main.style.backgroundImage = `url(${carouselImages[currentIndex].src})`;
});

arrowLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  main.style.backgroundImage = `url(${carouselImages[currentIndex].src})`;
});

// Overlay passar mouse por cima

// Seleciona todos os elementos com a classe 'b-img'
const imgsContainers = document.querySelectorAll('.b-img');

// Para cada container de imagem, adiciona event listeners para 'mouseover' e 'mouseout'
imgsContainers.forEach(container => {
    // Adiciona event listener para 'mouseover'
    container.addEventListener('mouseover', () => {
        // Seleciona o overlay dentro do container atual
        const overlay = container.querySelector('.overlay2');
        // Remove a classe 'hidden' para tornar o overlay visível
        overlay.classList.remove('hidden');
    });

    // Adiciona event listener para 'mouseout'
    container.addEventListener('mouseout', () => {
        // Seleciona o overlay dentro do container atual
        const overlay = container.querySelector('.overlay2');
        // Adiciona a classe 'hidden' para ocultar o overlay
        overlay.classList.add('hidden');
    });
});
