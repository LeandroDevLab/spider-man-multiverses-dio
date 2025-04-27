//Função de quando o mouse entrar adicionar uma class no elemento(this)
function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`; //adicionar um ID no Body, peqando o this.id, o ID do card que foi escutado (mouse entrou)
}

//Função para remover quando o mouse sai no elemento(this)
function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = ''; //remove o ID do body quando o mouse sai
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    //escutando o evento do mouse entrar na área de um elemento
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

//fazendo com que o Script só seja carregado após o carregamento da página - mais uma forma
//prefiro colocar o script no final e adicionar um defer
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

//outra possibilidade, mas com addEventListener daria certo
function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -90 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}