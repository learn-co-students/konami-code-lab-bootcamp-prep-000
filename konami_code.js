const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  //event listener to document.body
    //check for keydown as an event
  var index = 0;

  document.body.addEventListener('keydown', function(e) {
    //if user eters every code correctly
      //alert() a nice message
    var userKey = parseInt(e.which || e.detail);

    if (userKey === code[index]) {
      index++;

      if (index === code.length - 1) {
        alert('Congratulations! You have activated the KONAMI code!');
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
