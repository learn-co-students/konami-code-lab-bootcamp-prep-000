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


let index = 0

function init() {
  // your code here
  document.body.addEventListener("keydown", function (e) {

    console.log(`Button pressed is ${e.key} and index is ${index}`)
    
    if (e.key === codes[index])
      index++
    else
      index = 0

    if (index === codes.length)
    {
      alert("You did it!")
    }
  })
}
