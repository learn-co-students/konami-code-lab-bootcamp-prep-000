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
  let index = 0;
  function onKeyDownHandler(e) {

    const key = parseInt(e.detail || e.which)
    if (key === code[index]) {
      index++

      if (index === code.length) {
        return alert("Hurray!")
        index = 0
      }
    } else {
      index = 0
      }
    }
  }	


