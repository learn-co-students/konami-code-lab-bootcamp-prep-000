
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  
  let index = 0;
  
  document.addEventListener('keydown', function (event) {
  	const whichName = parseInt(event.which || event.detail);
  	console.log(whichName);
  	const key = whichName;

	  if (key === code[index]) {
      index++;
      console.log('index: ' + index);
 
      if (index === code.length) {
        window.alert("Congratulations!");
      index = 0;
      }
    } else {
      index = 0;
    }
  });
}

//init();


