const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let indexKonami = 0;

function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[indexKonami]) {
      indexKonami++;

      if (indexKonami === code.length) {
        alert("Hurray!");

        indexKonami = 0;
      }
    } else {
      indexKonami = 0;
    }
  })
}

//document.addEventListener('keydown', function(e) {
//console.log(e.detail)
//})
document.addEventListener('keydown', function(e) {
  console.log(e.detail)
})

document.addEventListener('keydown', function(e) {
  console.log(e.location)
})
