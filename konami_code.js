const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  let body = document.body;

  body.addEventListener('keydown', function(e){
    console.log('yara  ', parseInt(e.which || e.detail));
    console.log('blab  ', code[index]);
    if (parseInt(e.which || e.detail) === code[index]) {
      index++;
      if (index === code.length) {
        alert('Congrats!!!');
        index = 0;
        return;
      }
    } else {
      index = 0;
      return;
    }
  });
}
