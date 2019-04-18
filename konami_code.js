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
  const body = document.body
  let index = 0;
  body.addEventListener('keydown', function(e){
    if (e.key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert("Hooray!")
        index = 0;
      }
    } else {
      index = 0;
    }
  })
  }
