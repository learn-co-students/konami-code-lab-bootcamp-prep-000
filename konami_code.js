const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

const bodyVar = document.body;

function init() {
  // Write your JavaScript code inside the init() function
  bodyVar.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("Hurray, you did it!");
        index = 0;
      }
    } else {
      // alert('Code has been reset');
      index = 0;
    }
  });
}
