const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.querySelector('body')



function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;

  // This is the function that would be invoked by the event listener.
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which); //convert the key inputed into a integer

    if (key === code[index]) { // compare key var with the code
      index++;

      if (index === code.length) { //if the index is as long as the array length
        alert("Hurray!");

        index = 0;
      }
    } else { //restart index
      index = 0;
    }
  }
  body.addEventListener('keydown', onKeyDownHandler)
}
