const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
/*My code works in the browser. It is difficult to see what the tests are testing for in terms of..
  the structure of the function. */
function init() {
  let index = 0
  document.body.addEventListener('keydown', function(e) {
    if (parseInt(e.which || e.detail) === code[index]) {
    index ++ ;
    if (index === code.length) {
      alert("You unlocked the code!")
      index = 0
    }
  } else {
    index = 0
  }
 })
}
