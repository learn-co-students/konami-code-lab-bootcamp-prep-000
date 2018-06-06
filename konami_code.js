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
  // your code here
  
    document.body.addEventListener('keydown',onKeyDownHandler(e)) 
  
    let index = 0
    function onKeyDownHandler(e) {
    const key = e.key;
   
    if (key === code[index]) {
      index++;
   
      if (index === code.length) {
        alert("Hurray!");
   
        index = 0;
      }
    } 
    else 
    {
      index = 0;
    }
  }
}







