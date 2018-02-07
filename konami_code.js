const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
let i = 0;

document.body.addEventListener('keydown', function(e) {
  var keys = parseInt(e.detail || e.location || e.which);

  console.log(e.detail)
  console.log(e.location)
  console.log(e.which)

  if (keys === code[i]) {
    i++;

    if (i === code.length) {
      alert("WOO HOO! You did it!");

      i = 0;
    }
  }

  else {
    i = 0;
  }
});
}

