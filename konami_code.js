const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var keys = [];
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    keys.push(key);
    if (keys.length === code.length) {
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] !== code[i]) {
          return;
        }
      }
      alert("Congrats!")
    };
  });
};

init()

//store input in an array
//check in the first input equals the first code
//continue to loop through code, order is important?
//create a function that adds an event listener
//push input in the array, conver input into numbers
//when there is a match between the input and code
//alert a congratutory statement
