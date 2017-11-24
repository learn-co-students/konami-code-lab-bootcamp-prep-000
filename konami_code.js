const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index = 0;

function init() {
  console.log('initialized')

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);

    if (code[index] === key) {
      index++
      console.log(index)
    } else {
      index = 0
    }

    if(index === code.length) {
       alert('Congratultions! You entered the Konami Code.');
    }

  } );

}
