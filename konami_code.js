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

const body = document.getElementsByTagName('body')[0]

function init() {
  // your code here

  var index = 0;

  body.addEventListener('keydown', function(e) {

    const key = parseInt(e.which || e.detail)

    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        alert('You broke the Konami Code!')
        index = 0
      }
    }
    else {
      index = 0
    }

  },false)


}


init();
