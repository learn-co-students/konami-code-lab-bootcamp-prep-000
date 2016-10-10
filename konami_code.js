const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var body = document.body;
  var index = 0
  body.addEventListener('keydown',function onKeyDownHandler(e){
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        alert("YOU DID IT!");
        index = 0
      }
    } else {
      index = 0
    }
  });


}



// unattached event handler




// var body = document.body;
//
// body.addEventListener('keydown',onKeyDownHandler)
