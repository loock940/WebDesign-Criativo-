//Inicialização:

let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

//Obtém referências aos botões de navegação anterior e posterior.

let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");

//Seleciona o contêiner principal e todos os itens do carrossel.

let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");

//Encontra o indicador de pontos e seleciona todos os pontos individuais.

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
  let itemold = container.querySelector(".list .item.active");
  itemold.classList.remove("active");

  let dotsold = indicator.querySelector("ul li.active");
  dotsold.classList.remove("active");
  dots[active].classList.add("active");

  indicator.querySelector(".number").innerHTML = "0" + (active + 1);
}

//Define variáveis para controlar o estado atual do carrossel.

nextButton.onclick = () => {
  active = active + 1 > lastPosition ? 0 : active + 1;
  setSlider();
  items[active].classList.add("active");
};

prevButton.onclick = () => {
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  setSlider();
  items[active].classList.add("active");
};
