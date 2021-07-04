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
  
  let index = 0;
  document.body.addEventListener("keydown", (e) => {
    const key = e.key;
    console.log(key)
    
    if (key === codes[index]){
      index++;

      if (index === codes.length){
        alert("Congrats!");
        index = 0;
      }

    }
    else{
      index = 0;
    }
  })
  
}

