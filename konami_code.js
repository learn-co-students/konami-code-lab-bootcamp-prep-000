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

let index = 0;

function init() {
  document.getElementById("myBody").addEventListener("keydown", konamiKode);
  
  function konamiKode(e){
    const key = e.key;
    
    if (key===codes[index]){
      index++;
      
      if (index === codes.length) {
        alert("You win $1000,000!!");
        index = 0;
      } 
   
      
    } else {
        index = 0;
    }
  }
 
}
