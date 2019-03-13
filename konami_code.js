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
  const input = document.getElementsByTagName('body')[0];
  let i = 0
  
  input.addEventListener('keydown', function(e) {
    const key = e.key;
    if ( key === codes[i] ) {
      i++;
      if ( i === codes.length ) {
        alert('A winner is you!');
        i = 0;
      }
    } else {
      i = 0;
    }
  });
}