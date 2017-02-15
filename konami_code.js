const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.querySelector("body");

var index = 0;
var arr = [];



function init() {

  body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which)
    //console.log(key)
    if (key === code[index]) {
      index++
      arr.push(key)
      console.log(key)
      if (index === code.length) {
        alert("YES!")
      }
    } else {
      index = 0;
      arr = [];
    }

    //console.log(e.which)
    });


}
