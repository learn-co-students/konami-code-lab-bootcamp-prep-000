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
 
  let index = 0;
  document.body.addEventListener('keydown', keyPressed);

  function keyPressed(event) {
    const xKey = event.key;
    
    if (xKey === codes[index]) {
      index++;
      
      if (index === codes.length) {
        alert('Congratulations!!!');
        index = 0;
      }
    } else {
    
      index = 0;
    }
    
}
}

