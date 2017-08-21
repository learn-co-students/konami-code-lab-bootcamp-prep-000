const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var i = 0;
  document.body.addEventListener('keydown', e => {
    if (parseInt(e.which || e.detail) === code[i]) {
      i++;
      if (i === code.length) {
        alert("Hurray");
        i = 0;
      }
    }else {
      i = 0;
      }
  });
}
