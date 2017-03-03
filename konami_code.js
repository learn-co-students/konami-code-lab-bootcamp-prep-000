const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var totalCounter = 0;
var indexCounter = 0;

function init() {
  // your code here
  document.body.addEventListener('keydown',konamiHandler)

  function konamiHandler(e) {
    var key = parseInt(e.which || e.detail);

    if (key === code[indexCounter]) {
      totalCounter+= key;
      indexCounter++;
      console.log(indexCounter);
    } else {
      totalCounter = 0;
      indexCounter = 0;
      console.log(indexCounter);
    }

    if (totalCounter == 439) {
      alert("Snake? Snake?! SNAAAAAKE!!!");
    }

  }
}
