const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  var counter = 0;
  document.body.addEventListener('keydown', function(e) {
    var key = parseInt(e.which) || parseInt(e.detail);  
    if (code[counter] === key) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter === code.length -1){
      alert("Great job buddy!");
    }
  });
}

