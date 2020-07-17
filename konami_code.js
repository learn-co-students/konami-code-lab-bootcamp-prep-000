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

  var index = 0;
  document.body.addEventListener("keydown", function oneKeyDownHandler(e) {
    const key = e.key;
    if(key===codes[index]){
      index++;
    
      if(index === codes.length){
        alert("Hurray!");
      }
    }
    else{
      index = 0;
    }
  })
  

}


