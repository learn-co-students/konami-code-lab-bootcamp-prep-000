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

let index = 0;

function init() {
  const main = document.querySelector('body');

  main.addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === codes[index]) {
        index++;
        if (index === codes.length) {
            alert("You did it!");
            index = 0;
        }
    } else {
        index = 0;
    }
})

}

/*OFFICIAL SOLUTION
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
*/
