const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
window.addEventListener("keydown", onKeyDownHandler);  
  
  let index = 0;

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
 
  if (key === 16 || key === 20) {
	  return; 
  }
  
  if (key === code[index]) {
    index++;
	console.log("Index is: " + index);
    if (index === code.length - 1) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}

}