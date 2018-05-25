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

/*This was my first approach. It works, but after a pair programming session it became clear that this approach was more expensive than the index approach. 
function init() {
  var current = codes.slice(0);
  document.body.addEventListener('keydown', function(e) {
    if (e.key === current[0]) {
      current.shift();
        if (current.length === 0) {
          alert('Konami Success');
          current = codes.slice(0);
        }
    } else {
      current = codes.slice(0);
    } 
  } 
)}*/

function init() {
  let index = 0
  document.body.addEventListener('keydown', function(e) {
    if (e.key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert('Konami Success!');
        index = 0
      }
    } else {
      index = 0;
    } 
  })
}
