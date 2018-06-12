const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  const input = document.querySelector('body')

 input.addEventListener('keydown', function(e) {
   switch(index){
     case 0:
       index = (e.which === 38) ? 1 : 0;
       break;
     case 1:
       index = (e.which === 38) ? 2 : 0;
       break;
     case 2:
       index = (e.which === 40) ? 3 : 0;
       break;
     case 3:
       index = (e.which === 40) ? 4 : 0;
       break;
     case 4:
       index = (e.which === 37) ? 5 : 0;
       break;
     case 5:
       index = (e.which === 39) ? 6 : 0;
       break;
     case 6:
       index = (e.which === 37) ? 7: 0;
       break;
     case 7:
       index = (e.which === 39) ? 8 : 0;
       break;
     case 8:
       index = (e.which === 66) ? 9 : 0;
       break;
     case 9:
       index = (e.which === 65) ? 10 : 0;
       break;
     default:
       index = 0;
   }
   checkKonami();
 })
}

function checkKonami(){
  if(index === codes.length){
    console.log("konami");
    window.alert("konami");
    index = 0;
  }
}
