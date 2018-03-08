const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0

function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.keyCode);

    if (key === code[index]) {
      index++
      if (index === code.length) {
        alert('code successful')
        index = 0
      }
    }
    else {
      index = 0
    }

    console.log(`Key: ${key}, Index: ${index}`);
  });
}
