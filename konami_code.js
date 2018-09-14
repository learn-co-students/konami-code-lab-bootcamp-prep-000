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
  let idx = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    idx = (codes[idx] === key) ? ++idx : 0

    if (idx === codes.length) {
      window.alert("Hurray!");
      idx = 0
    }

  });
}

/*function init() {
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
*/
init();
