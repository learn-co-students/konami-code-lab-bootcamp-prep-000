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
  
   let count = 0;
   document.body.addEventListener('keydown', (event) => {
    const key = event.key;
   
    count = (codes[count] === key) ? ++count : 0 
   
      if (count === codes.length) {
        alert("Hurray!");
        count = 0;
    }
    
  
});
}

//init();
