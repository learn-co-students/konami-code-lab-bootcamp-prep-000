const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  const bod = document.body;
  var idx = 0;
  bod.addEventListener('keydown', (evnt) => {
    const key = parseInt(evnt.detail || evnt.which);

    if(key === code[idx]) {
      idx++;

      if(idx === code.length - 1) {
        alert('You get infinite lives!');
        idx = 0;
      }
    } else {
      idx = 0;
    }
  })
}
