const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var i = 0;

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
}



function init() {
  // Write your JavaScript code inside the init() function

  document.body.addEventListener('keydown', function KeyboardEvent(KeyboardEvent.charCode) {
    var keyboard = [];
    for (var i = 0; i < code.length; i++) {
        if(KeyboardEvent.charCode === code[i]){
          keyboard.push(KeyboardEvent.charCode)
        } else {
            keyboard = [];
          }
        if(keyboard === code){
          alert('Congratulations!')
          }
        }
      }
    )
  }

console.log(init());
