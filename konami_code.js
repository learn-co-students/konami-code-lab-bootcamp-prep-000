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
  const key = document.body;
  var index = 0;
  key.addEventListener('keydown', function(e) {
    const test = e.key;
    if(test === codes[index]) {
    index++;
    if(index === codes.length) {
      alert("Hurray, you entered tke Konami code!");
      index = 0;
    }
    } else {
      index = 0;
    }
  })
}
