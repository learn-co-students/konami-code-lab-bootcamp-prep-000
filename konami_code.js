const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let i = 0;
  document.body.addEventListener('keydown',function(event) {
  const key = parseInt(event.which || event.detail);
  if (key === code[i]) {
    console.log(code[i]);
    i++;
    if (i === code.length) {
      alert("Hurray!");
      i = 0;
      }
    }
    else {
      i = 0;
    }
  })
}
