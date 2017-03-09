var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index=0;
function init() {
  document.body.addEventListener('keydown',function(e) {
    var key = parseInt(e.detail || e.which);
    if (key === code[index]) {debugger;
      index++;
      if (index === code.length) alert("easter egg!");
    }else {
      index = 0;
    }
  }
  )
}
