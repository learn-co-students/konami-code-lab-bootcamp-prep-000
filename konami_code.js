const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.body

let index = 0

function init() {
  // your code here
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);
    if (key === code[index]) {
      index++;
        if (index === code.length) {
          alert("You got it!");
          index = 0;
        }
    } else {
      index = 0;
    }
  })
};
