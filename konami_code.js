const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0;

  function trackKeyDown(e){
    var key = parseInt(e.detail || e.which);
    if (key === code[index]){
      index ++;
      if (index === code.length){
        alert("YAY");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
  document.body.addEventListener("keydown", trackKeyDown);

};
