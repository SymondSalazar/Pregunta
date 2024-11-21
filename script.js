const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const happyImage = document.getElementById('happyImage');
const happyImage2 = document.getElementById('imagenx');
var a = 0;
// Función para mover el botón "No" a una posición aleatoria en toda la pantalla
noButton.addEventListener('mouseover', () => {
    const maxX = 400 - noButton.offsetWidth;
    const maxY = 400 - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// Función para mostrar la imagen al hacer clic en "Sí"
yesButton.addEventListener('click', () => {
  happyImage2.style.display = 'block';
  happyImage.style.display = 'block';
});

noButton.addEventListener('click', () => {
  if (a == 0){
    noButton.textContent = '¿Segura?';
    a++
  }
  else if (a == 1){
    noButton.textContent= '¿Enserio? :c';
    a++;
  }
  else if(a == 2){
    noButton.textContent = 'la tercera es la vencida';
    a++;
  }
  else{
    noButton.textContent = 'Di que si :c';
    a = 0;
  }
});