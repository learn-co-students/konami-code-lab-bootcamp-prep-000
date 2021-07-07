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

var index = 0;

function init() {
  document.body.addEventListener('keydown', function(e) {
  var key = parseInt(e.detail || e.which);
  if (key === code[index]){
    if (index === code.length - 1){
      alert('grats!');
    }
  index++;
  }
  else{
    index = 0;
    }
  })
}
//init()
