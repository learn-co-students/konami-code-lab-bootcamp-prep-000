const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

const konamiKeys = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];



function init() {
  let index = 0;
  
 document.body.addEventListener('keydown', function onKeyDownHandler(event){
   const pressedKey = `${event.code}` ;
   const keyPressed = parseInt(event.which || event.detail);
   
   
   if (pressedKey === konamiKeys[index] || keyPressed === konamiCode[index]) {
     index++;
     if (index === konamiKeys.length || index === konamiCode.length) {
       alert("Congratulations, you did it!");
       index = 0;
     }
   } else {
     index = 0;
   }
 });
 
 
}