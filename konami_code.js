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
  
  document.body.addEventListener("Keydown", (e) => {
    const key = e.key;
    
    index = (codes[index] === key) ? ++index : 0;
    
    if (index === codes.length) {
      alert("You have cracked the code!");
    }
  });
}
