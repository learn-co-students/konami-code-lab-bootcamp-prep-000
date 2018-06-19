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
  "a"];
 
let count = 0;

function init() {
  document.body.addEventListener('keydown', function(e) {
    var key = e.key;
    console.log(e.key);
  if ( key === codes[count]) {
      count++;
      
      if ( count === codes.length ) {
        alert('This was a triumph!');
        count = 0;
      }
    } else {
          count = 0;
  }
 });
}
