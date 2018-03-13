const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  // Write your JavaScript code inside the init() function
const code = parseInt(e.detail || e.which);
if (code === init[e]) {
  code++;
  if (e === code.length) {
    alert('hurray!');
    code = 0
  } else {
    code = 0
  }
}
} 