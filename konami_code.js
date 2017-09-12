const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let indexCounter = 0;

function init() {
  // Write your JavaScript code inside the init() function
  console.log('init() loaded');
  document.body.addEventListener( 'keydown', codeCheck );

  function codeCheck(e) {
    let keyPressed = parseInt( e.which || e.detail );
    if ( keyPressed === code[indexCounter] ) {
      indexCounter++;
      if ( indexCounter === code.length ) {
        alert( 'Konami!' );
        indexCounter = 0;
      }
    } else {
      indexCounter = 0;
    }
  }
}
