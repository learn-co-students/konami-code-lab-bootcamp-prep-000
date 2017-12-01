const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0

function init() {
  document.body.addEventListener('keydown', function(event) {
    //alert('yo');
    //console.log(parseInt(event.detail || event.which));
    //console.log(code.length);
    //console.log(index);
    var key = parseInt(event.detail || event.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        //console.log("should be saying hurray");
        index = 0;
        alert('Hurray!');
      }
    }
    else {
      index = 0;
    }
    //console.log(index);
  });
}
