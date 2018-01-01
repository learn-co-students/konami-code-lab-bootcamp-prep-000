const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const code_str = ["ArrowUp",
                  "ArrowUp", 
                  "ArrowDown", 
                  "ArrowDown", 
                  "ArrowLeft", 
                  "ArrowRight",
                  "ArrowLeft",
                  "ArrowRight",
                  "b",
                  "a"];
                  
function init() {
  // Write your JavaScript code inside the init() function
  
  let index = 0;
  
  document.addEventListener('keydown', (event) => {
    //const keyName = event.key;
    const keyName = event.which || event.location || event.detail
    console.log(event.which, event.location, event.detail)
    //console.log(keyName, index, code.length)
    if (keyName === code[index]) {
      index++;
      if (index === code.length) {
        alert("Hurray!")
        index = 0;
      }
    } else {
      index = 0;
    }
    // if (keyName === code_str[index]) {
    //   index++;
    //   if (index === code_str.length) {
    //     alert("Hurray!")
    //     index = 0;
    //   }
    // } else {
    //   index = 0;
    // }
  })
    //alert('keydown event\n\n' + 'key: ' + keyName);
}

init()
 