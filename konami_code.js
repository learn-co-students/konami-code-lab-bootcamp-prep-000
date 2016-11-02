
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  // keep track of index outside of event handler
  var index = 0;

  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which);


      if (key === code[index]) {
        index += 1;
      } else {
        index = 0;
      };

      if (index === code.length - 1) {
        alert('YOU DID IT!');
      }

  });

}

init();
