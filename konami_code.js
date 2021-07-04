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

  document.body.addEventListener("keydown", onKeyDownHandler)

  function onKeyDownHandler(e){

    const key = parseInt(e.which || e.detail)

    if (key === code[i]) {
      i++

      if (i === code.length - 1){
        alert("YOU DID IT!")
        i = 0
      }
    }
    else {
      i = 0
    }
  }

}
