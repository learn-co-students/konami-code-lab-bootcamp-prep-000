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
}

idx = 0

document.body.addEventListener('keydown',
  function(e) {
    key = parseInt(e.which || e.detail)
  if (key === code[idx]) {
    if (code[idx] === 65){
      alert("YOU DID THE THING")
    }
    console.log(key)
  idx++
  }
  else{
    idx = 0
  }
  }
)
