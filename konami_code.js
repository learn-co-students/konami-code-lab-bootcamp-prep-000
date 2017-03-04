const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here

  var index = 0;

  function onKeyDownHandler(e){
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      console.log("You have entered one part of the code");
      if(index === code.length) {
        alert("You entered the Konami Code!");
        index = 0;
      }
    } else {
      index = 0;
    }

  }
  //Adding eventListener to body of HTML doc, pressing a keyboard key down will trigger program to execute onKeyDownHandler function.
  document.body.addEventListener("keydown", onKeyDownHandler);
}
