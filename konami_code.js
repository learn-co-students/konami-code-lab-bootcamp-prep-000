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
  var body = document.querySelector("body");
  body.addEventListener("keydown", konami); 
}

var index = 0;

function konami(x){
  const key = x.key;
  console.log(key);
  if (key === codes[index]){
    index++;

    if (index === codes.length){
      alert("Konami Code Successful");
      index = 0;
    }
  }
  else {
    index = 0;
  }
}

init();