const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// establish index outside of function
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  var body = document.body;

// add event listener
  body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which);

// check to see if key value is the same as the code at the specified index and increase index if it is;
    if (key === code[index]) {
      index++;
      
// if index reaches length of code, complete code achieved and reset index
      if (index === code.length) {
        alert("hurray!");
        index = 0;
      }
      
// otherwise reset index
    } else {
      index = 0;
    }
  })
}