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
  document.body.addEventListener("keydown", checkKey);
  
  function checkKey(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      index++;
      
      if (index === codes.length) {
        window.alert("Congrats!");
        
      }
      else {
        index = 0;
      }
    }
  }
}
