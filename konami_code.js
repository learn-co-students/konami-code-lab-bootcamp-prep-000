const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var body = document.querySelector("body");
  var current = 0;
  body.addEventListener("keydown", function(event) {
    if (parseInt(event.detail) === code[current]) {
      current = current + 1
      if (current === code.length) {
        alert("finished");
      }
    } else {
      current = 0;
    }
  })
}
init();