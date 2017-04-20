const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var index = 0;

  function onKeyDownHandler(event){
    var key = parseInt(event.detail || event.which)
    console.log(key);

    if (key === code[index]){
      index++

      if (index === code.length){
        alert("You are right!");
        index = 0;
      }
    }
    else {
      index = 0;
    }
  }

  document.body.addEventListener('keydown', onKeyDownHandler);
}
