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
  var index = 0;
  var ckey;
  document.body.addEventListener('keydown', function (keey) {
        ckey=keey.key;
        console.log(ckey);

        if (index < codes.length ) {
          if(ckey == codes[index]) {
            index++;
          }
          else index = 0;
        }

        if (index == codes.length) {
          window.alert();
          index = 0;
          }

  })
}

init();
