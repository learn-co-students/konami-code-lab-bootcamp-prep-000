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

var i = 0

function init() {
  var body = document.body

  body.addEventListener('keydown', function(e){
    for(let i = 0; i < code.length; i++){
      if(parseInt(e.detail || e.which) === code[i]) {
        alert("YOU DID IT!")
      }
    }
  })
}

init()
