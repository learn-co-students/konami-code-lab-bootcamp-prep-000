const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
let index = 0;
  var body = document.querySelector('body');
  body.addEventListener('keydown', function(e){
    if (parseInt(e.detail || e.which) === code[index]){
      index ++;
      if (index === code.length){
        alert('Congratulation !!');
        index = 0;
      }
    } else {
      index = 0;
    }
  });

}
