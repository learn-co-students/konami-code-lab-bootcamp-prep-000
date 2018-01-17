const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

function init() {
  document.body.addEventListener('keydown', keyHandler);
}


function keyHandler(e) {
  
  const key = e.keyCode;
  if (key === code[index]) {
    index++;
    if (index === code.length) {
      window.alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}




// function init(e) {
//   alert(e.char);
// }

// function properties(e) {
//   alert( `target is ${e.target}\ntype is ${e.type}\nchar is ${e.char}\nkey is ${e.key}
//           \ncode is ${e.code}\ncharCode is ${e.charCode}\nkeyCode is ${e.keyCode}\nwhich is ${e.which}
//          \nlocation is ${e.location}`)}


