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
  function onKeyDownHandler(e) {
    const key = e.key;

    if (key === codes[index]) {
      index++;
      console.log(index)
      if (index === codes.length) {
        alert("Hurray!");
        console.log("Should have gotten an alert")
        index = 0;
      }
    } else {
      index = 0;
    }
  }

  document.body.addEventListener('keydown', onKeyDownHandler)
}
init()
