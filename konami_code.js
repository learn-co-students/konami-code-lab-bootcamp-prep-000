const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var element = document.createElement('div');
  const test = document.querySelector('div');
  let index = 0;

  document.addEventListener('keydown', function(e){
    var red = parseInt(e.detail || e.key);

    if (red === code[index]){
      index++;

      if (index === code.length){
        alert("Code Unlocked!");

        index = 0;
      }
    }
    else {
      index = 0;
    }
  })

}
