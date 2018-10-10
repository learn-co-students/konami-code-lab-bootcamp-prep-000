//const codes = [
  //"ArrowUp",
  //"ArrowUp",
  //"ArrowDown",
  //"ArrowDown",
  //"ArrowLeft",
  //"ArrowRight",
  //"ArrowLeft",
  //"ArrowRight",
  //"b",
  //"a"
//];

function init() {
  console.log("test")
  //var body = document.querySelector('body');
  
 const arrow = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

 var index = 0;

 
  
  document.body.addEventListener('keydown', (e) => {
 const key = e.key;
 
 console.log("key", key)
 console.log("arrow", arrow[index])
  if (key === arrow[index]) {
   index++;
  
   if (index === arrow.length) {
     alert("Hurray!")
     
     index = 0;
   }
  }   else {
       index = 0;
     } 
 }); 
  
}



