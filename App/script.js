
var lives = 1

//Mudança de tamanho de tela
var height = 0;
var width = 0;

function screenChange() {

   height = window.innerHeight;
   width = window.innerWidth;

}

screenChange();


function randomPosition() {
//Remoção automática do mosquito
   if (document.getElementById('gnat')) {
      document.getElementById('gnat').remove();

      if (lives <= 3) {
         document.getElementById('life' + lives).src = "imagens/coracao_vazio.png"; 
         
         lives++;
      }else {
         window.location.href = 'game_over.html';
      }
   }

//Posições randomicas
   var positionX = Math.floor(Math.random() * width) - 90;
   var positionY = Math.floor(Math.random() * height) - 90;

   console.log(positionX, positionY);

//Se cair coordenada 0
   positionX = positionX < 0 ? 0 : positionX;
   positionY = positionY < 0 ? 0 : positionY;

//Criar o elemento HTML mosquito
   var imgGnat = document.createElement('img');

   imgGnat.src = 'imagens/mosquito.png'
   imgGnat.className = gnatSize() + ' ' + randomSide();
   imgGnat.style.left = positionX + 'px';
   imgGnat.style.top = positionY + 'px';
   imgGnat.style.position = 'absolute';
   imgGnat.id = 'gnat';
   imgGnat.onclick = function () {
      this.remove();
   }

   document.body.appendChild(imgGnat);

}

//Tamanho do mosquito 
function gnatSize() {

   var size = Math.floor(Math.random() * 3); //de 0 até 2

   if(size === 0) {
      return 'gnat1';
   }else if (size === 1) {
      return 'gnat2';
   }else if (size === 2) {
      return 'gnat3';
   }else {
      console.log('ERROR');
   }

}

//Lado do mosquito
function randomSide() {

   var side = Math.floor(Math.random() * 2); //de 0 até 1

   console.log(side);
   
   if (side === 0) {
      return 'sideA';
   }else if (side === 1){
      return 'sideB';
   }else {
      console.log('ERROR');
   }

}

//Timer dos mosquitos
setInterval(function () {
   randomPosition();
}, 1000);