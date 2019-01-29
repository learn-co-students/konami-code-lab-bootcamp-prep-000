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
  const body = document.querySelector("body");
  let index = 0;
  let code = [];
  console.log("in init");

  body.addEventListener("keydown", function(e) {
    let key = e.key;
    if (key === codes[index]) {
      code.push(e.key);
      index++;
      console.log(code);
      if (code.length === codes.length) {
        alert("KONAMI CODE");
        console.log("ayyyyy")
      }
    } else {
      index = 0;
      code = [];
    }
  });
}
