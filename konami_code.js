const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//UpArrow, UpArrow, DownArrow, DownArrow, LeftArrow, RightArrow, LeftArrow, RightArrow, B, A
  var index = 0;

  function onKeyDownHandler(e){
    let key = parseInt(e.detail || e.which);

    if(key === code[index]){
      index++;

      if(index === code.length){
        alert("Hurray!");
        index = 0;
      }
    }
    else{
      index = 0;
    }

    // DEBUG CODE:
    //console.log(`Key: ${key} | Index: ${index} | CodeIndex: ${code[index]}`);
  };

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', onKeyDownHandler);
}
