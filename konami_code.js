const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const codeListener = document.querySelector('body');
  var codeKeeper = [];
  codeListener.addEventListener('keydown', function(e) {
    codeKeeper.push(e.which || e.detail);
    if (codeKeeper.length > 10) {
      codeKeeper.shift();
    }
    console.log(codeKeeper);
    if (codeKeeper.toString() == code.toString()) {
      window.alert("Congratulations! You've won $1,000,000!");
    }
  });
};
init();
