const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

function init() {
  document.addEventListener('keydown', function(e) {
    const keyPress = parseInt(e.which || e.detail);
    console.log(keyPress);
    if (code[index] === keyPress) {
      index++;
      console.log(index);
      if (index === code.length) {
        alert('Congratulations you found the code!');
        index = 0;
      }
    } else {
      index = 0;
      console.log('Try Again');
    }
  });
}