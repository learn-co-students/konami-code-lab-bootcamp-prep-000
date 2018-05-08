const konamicode = [
"ArrowUp",
"ArrowUp",
"ArrowDown",
"ArrowDown",
"ArrowLeft",
"ArrowRight",
"ArrowLeft",
"ArrowRight",
"b",
"a"
]

function init() {
  let index = 0;

  document.body.addEventListener('keydown', checkKeyDown)

  function checkKeyDown(e) {
    const key = e.key;

    if (key === konamicode[index]) {
      index++;

      if (index === konamicode.length) {
        alert('Good job!');
      }
      
    } else {
      index = 0;
    }

    console.log('index: ' + index);
    console.log('key: ' + key);
  }
}
