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

let index = 0;

function init() {
  const body = document.querySelector('body');
  body.addEventListener('keydown', function(e) {
    const key = e.key;
    if(key === codes[index]) {
      index++;
      if(index === codes.length) {
        alert("Congratulations, you've entered the Konami Code!");
        index = 0;
      }
    }else{
      index=0;
    }
  });
}
