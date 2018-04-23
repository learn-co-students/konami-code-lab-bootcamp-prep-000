
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0;
  const div =  document.querySelector('body');

  div.addEventListener('keydown', function(e) {
  var key = parseInt(e.key || e.detail);

  if(code[index] == key)
  {
    index++;
    console.log("A key pressed.");
  } else {
      index = 0;
  }
  if(index == code.length)
  {
    console.log("All keys pressed.");
    window.alert("Hurray!");
  }
  });
  // Write your JavaScript code inside the init() function
}
