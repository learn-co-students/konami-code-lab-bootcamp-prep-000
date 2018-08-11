
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
  let i = 0;
  document.body.addEventListener('keydown', function(e){
  let key = e.key;
  console.log(key);
    if (key === codes[i]) {
      i++;
    }
    else {
          i = 0;
    }
      if (i === codes.length) {
        alert('Congratulations!');
        i = 0;
      }
  })
}
