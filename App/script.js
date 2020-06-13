
//Mudança de tamanho de tela
var height = 0;
var width = 0;

function screenChange() {

   height = window.innerHeight;
   width = window.innerWidth;

}

screenChange();

//Posições randomicas
var positionX = Math.floor(Math.random() * width) - 90;
var positionY = Math.floor(Math.random() * height) - 90;

console.log(positionX, positionY)

//Se cair coordenada 0
positionX = positionX < 0 ? 0 : positionX;
positionY = positionY < 0 ? 0 : positionY;

//Criar o elemento HTML

var imgGnat = document.createElement('img');

imgGnat.src = 'imagens/mosquito.png'
imgGnat.className = gnatSize();
imgGnat.style.left = positionX + 'px';
imgGnat.style.top = positionY + 'px';
imgGnat.style.position = 'absolute';

document.body.appendChild(imgGnat);

console.log(gnatSize())

//Tamanho do mosquito 
function gnatSize() {

   var size = Math.floor(Math.random() * 3); //de 0 até 2
   
   console.log(size)

   if(size === 0) {
      return 'gnat1';
   }else if (size === 1) {
      return 'gnat2';
   }else if (size === 2) {
      return 'gnat3';
   }else () => {
      console.log('ERROR');
   }

}