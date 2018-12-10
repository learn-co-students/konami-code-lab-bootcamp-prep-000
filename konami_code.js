const codes = [
  "ArrowUp", // 0
  "ArrowUp", // 1
  "ArrowDown", // 2
  "ArrowDown", // 3
  "ArrowLeft", // 4
  "ArrowRight", // 5
  "ArrowLeft", // 6
  "ArrowRight", // 7
  "b", // 8
  "a" //9
];



function init() {

var index = 0
let correctKey = false

const main = document.querySelector('body')

main.addEventListener("keydown", (e) => {
  const keyName = e.key;

  if (keyName === codes[index]){
    correctKey = true
    index ++
  }
  else if (keyName !== codes[index]){
    correctKey = false
    index = 0
  }
  if (index === codes.length && correctKey === true && keyName == codes[codes.length-1]){
    console.log("LOL")
    window.alert("CHEAT CODE ACTIVATED")
  }
console.log(`This was index ${index - 1}, and you pressed the key ${keyName}, now you should press ${codes[index]}, the sequence is correct: ${correctKey}`)
})
}
