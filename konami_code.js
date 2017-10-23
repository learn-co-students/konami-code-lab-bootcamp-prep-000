const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

// Keep track of index outside of the event handler.
let index = 0;
const bod = document.body

bod.addEventListener('keydown', function onKeyDownHandler(event){
  const key = parseInt(event.detail || event.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("KONAMI ");

      index = 0;
    }
  } else {
    index = 0;
  }
})


}
