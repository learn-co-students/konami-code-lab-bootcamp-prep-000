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

  const body = document.querySelector('body')

  body.addEventListener("keydown", code)
  function code(event){
      if(event.key === codes[index]) {
        index++;
        if(index === codes.length) {
          alert('Yipee!');
          index = 0;
        }
      } else {
          index = 0;
        }
  }
}
