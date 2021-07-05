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

var index = 0;

function init() {
  var index = 0;
  var body = document.body;
  body.addEventListener('keydown', function(e) {
    var key = parseInt(e.which || e.detail)
    if (key === code[index]) {
      index++;
  /* Bottom if statement will only run if the top statement is true.
  If bottom if statement is false, it will go back to the top if statement. */
      if (index === code.length - 1) {
        alert('YOU DID IT!');
        index = 0;
      }
    } else {
      // alert('Try again')
      index = 0;
    }
  })
}




/*up, up, down, down, left, right, left, right, b, a */
