const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function init() {
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
        index++;
      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
  // Write your JavaScript code inside the init() function



//function init() {
  // Write your JavaScript code inside the init() function
//  var blankPage = document.querySelector('body');
  //var input = [];
  //var keyStrokes = 0;
//  blankPage.addEventListener('keydown', function(event) {
    //add inputs into an array
//    input.push(event.which);
  //  console.log(input);
    //compare input values with code array
  //  for(var i = 0; i < input.length; i++) {
    //  if(input[i] === code[i]) {
      //  keyStrokes++;
  //    } else {
    //    keyStrokes = 0;
      //  input = [];
    //  }
  //  }
  //  if(keyStrokes === code.length) {
  //    alert("HADUKEN")
  //  }
//  })

//}
