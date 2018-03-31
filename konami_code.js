const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const codeListener = document.querySelector('body');
codeListener.addEventListener('keydown', function init(e) {
  // Write your JavaScript code inside the init() function
  var codeKeeper = [];
  codeKeeper.push(e.which);
  if (codeKeeper.length > 10) {
    codeKeeper.shift();
  }
  console.log(codeKeeper);
  if (JSON.stringify(codeKeeper) == JSON.stringify(code)) {
    alert("Congratulations! You've won $1,000,000!")
    return;
  }
}
init();
