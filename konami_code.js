const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var count = 0;
document.body.addEventListener('keydown', init);

function init(e) {
  const key = parseInt(e.which || e.detail);
  if(key === code[count]) {
    count++;

    if(count === code.length - 1) {
      alert('You did it!');
    }
  }
  else {
    count = 0;
  }
}
