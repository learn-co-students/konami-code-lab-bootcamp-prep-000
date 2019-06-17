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
 document.body.addEventListener('keydown', onKeyDownHandler); 
}

let i = 0;
function onKeyDownHandler(e) {
  const key = e.key;
  if(key === codes[i]){
      i++;
      if(i===codes.length)
      {
      alert("Congratulations! You typed the Konami Code");
      i = 0;
      }
    }
    else{ 
      i = 0;
  }
}

