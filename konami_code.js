

function init() {
  // your code here
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
    ]
  let index = 0

  function onKeyDownHandler(e) {
    const key = e.key;
    console.log(e)
    if (key === codes[index]) {
      index++;
      // debugger

      if (index === codes.length) {
        alert("Hurray!");
        // console.log("HURRAY!")

        index = 0;
      }
    } else {
      index = 0
    }
  }
  document.body.addEventListener('keydown', onKeyDownHandler, true)
}

init()
