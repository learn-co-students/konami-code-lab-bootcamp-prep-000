const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  var blankPage = document.querySelector('body');
  // var input = [];
  // var keyStrokes = 0;
  // var correctInputs;

  blankPage.addEventListener('keydown', function(event) {
    var key = parseInt(event.which || event.detail);

    if(code[index] == key){
      if(index == code.length - 1){
        alert("Yay you did it!");
        index =0;
      } else {
        index++;
      }
    } else {
      index = 0;
    }
    //add inputs into an array
    // input.push(parseInt(event.which || event.detail));
    // console.log(input);
    // //compare input values with code array
    // for(var i = 0; i < input.length; i++) {
    //   if(input[i] === code[i]) {
    //     correctInputs = true;
    //   } else {
    //     correctInputs = false;
    //   }
    // }
    //
    // if(correctInputs) {
    //   keyStrokes++;
    // } else {
    //   keyStrokes = 0;
    //   input = [];
    // }
    // if(keyStrokes === code.length) {
    //   alert("HADUKEN")
    //   keyStrokes = 0;
    //   input = [];
    // }
  })

}
