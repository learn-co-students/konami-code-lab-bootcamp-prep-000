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
  // your code here
  let index = 0;

  document.body.addEventListener('keydown', (event) => {
    const press = event.key;
    if (press) {
      console.log(`${press}`)
    }
    if (press === codes[index]) {
      index++;

      if (index === codes.length) {
        alert("You WIN!!!")

        index = 0;
      }

    } else {
      index = 0;
    }
  })
}
