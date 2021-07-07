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

  document.addEventListener('keydown', onKeyDownHandler);


  var index = 0;


  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
  	index++;

      if (index === code.length) {
        alert("WAY TO GO!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
