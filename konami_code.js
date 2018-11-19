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
var newDiv = document.createElement("div");
newDiv.style.backgroundColor = '#f9f9f9';
newDiv.style.textAlign = 'center';
document.body.appendChild(newDiv);
let index = 0;

function init() {
  document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    //by adding the following line, any key pressed is added to the div
    //newDiv.innerHTML += keyName;
    if (keyName === codes[index]) {
      index++;
      newDiv.innerHTML += `KC CODE`;
      if (index === codes.length) {
        alert("Hurray Konami Code Activated!");
        index = 0;
        newDiv.innerHTML = "";
      }
    } else {
      index = 0;
      newDiv.innerHTML = "";
    }
  });
}
init();
