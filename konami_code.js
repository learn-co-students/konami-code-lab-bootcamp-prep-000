const codes = [
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
];

function init() {

  let index = 0;

  var bodyVar = document.querySelector('body');

  bodyVar.addEventListener('keydown', function keyDownFriend(e) {

    const key = e.key;

    if (key === codes[index]) {
      index++;

      if (index === codes.length) {
        alert('Hurray!');
      }
    }

    else {
      index = 0;
    }
  });
}
