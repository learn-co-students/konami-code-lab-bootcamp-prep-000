const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var entry = [];

function init() {
  var body = document.querySelector("body");

  body.addEventListener("keydown", function(e) {
    entry.push(parseInt(e.which || e.detail));
    for(var i = 0; i < entry.length; i++) {
      if(entry[i] === code[i]) {
        if(entry.length === code.length) {
          alert("You got it!");
          break;
        }
      }
      else {
        break;
      }
    }
  });
}
