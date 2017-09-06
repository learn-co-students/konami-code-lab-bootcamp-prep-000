const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail)

    if (code[index] === key) {
      index++

      if (index === code.length - 1) {
        alert('hurray!')

        index = 0
      }
    } else {
      index = 0
    }
  })
}

/*const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // your code here
  var i = 0;

  document.body.addEventListener('keydown', function(e) {
     var keyStroke = parseInt(e.which || e.detail);

     if(keystroke === code[i]) {
       i++;
     if(i === code.length - 1  ) {
       alert("You've cracked it!!!");
       i = 0;
     }} else {
       i = 0;
     }
  })

}

init();
*/
