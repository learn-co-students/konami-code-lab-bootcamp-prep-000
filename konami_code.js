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
  const body = document.querySelector('body');
  let i = 0;
  let l = codes.length

  body.addEventListener('keydown', function(e) {
    let key = e.key;
    
    if (key === codes[i]) {
      i++;
      console.log(i);
      
      if (i === l - 1) {
        alert('Yas!');
        i = 0;
      }
    } else {
      i++;
    }
  })
}