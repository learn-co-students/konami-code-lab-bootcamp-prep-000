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
  var index = 0
     document.body.addEventListener("keydown", (event) => {

      const key = event.key
      var num = codes.length
      console.log('event', key);

      if (key === codes[index]) {

        if (index === num - 1) {
        alert('Hurray!')

          index = 0;

        }
        console.log('index', index);
      index++
      return index

      } else  {
        index = 0;
      }

  })
}
