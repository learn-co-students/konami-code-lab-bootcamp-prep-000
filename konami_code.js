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
  let index = 0
//called when any key is pressed//checks if keys are in order of codes
  function onKeyDownHandler(e) {
    //console.log(e)

      if (e === codes[index]) {
      //console.log(index)
      index = index + 1;

      if (index === codes.length) {
        //console.log('indexequalcodeslength')
        alert("Hi good for you");

        index = 0;
      }
    } else {
      //console.log('else')
      index = 0;
    }
  }
  console.log('somethingisrunning')
  const body = document.body;
  body.addEventListener('keydown',  (event) => {
    var keyDown = event.key
    onKeyDownHandler(keyDown)

  })

}
