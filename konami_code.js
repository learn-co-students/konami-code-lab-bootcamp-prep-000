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
  var index = 0
  document.body.addEventListener('keydown', function(e) {
    var key = e.key
    if (key === codes[index]) {
      console.log("Key logged:" + key)
      ++index
      if (index === codes.length) {
        alert("Hurray!!! You found the EasterEgg!")
      }
    } else {
      index = 0
    }
  });
}




/*


ArrowUp key initiates listening /comparing other keys
if keys continue to match keep liste/compare


DONE
listen for the first key ArrowUp
e.key === codes[i]
if keys don't match listen for upkey again
*/
