//up, up, down, down, left, right, left , right, b, a

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function init() {
  // Write your JavaScript code inside the init() function
document.body.addEventListener('keydown', function(e){

  var key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      console.log(e.which)
      index++;

      if (index === code.length) {
        alert("Congrat!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
