const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

const body = document.body

let index = 0;

function init() {
  body.addEventListener('keydown', function test(e) {
    const key = parseInt(e.detail || e.which);
    //*console.log(e.which);*//
    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Way to go; you have been granted infinite lives!");

        index = 0;
      }

    } else {
      index = 0;
    }
  })
}
