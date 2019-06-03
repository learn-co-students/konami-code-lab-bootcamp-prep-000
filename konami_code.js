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

const keyCodes = [
  38,
  38,
  40,
  40,
  37,
  39,
  37,
  39,
  66,
  65
  ]

var keyPressArray = [];
const codeLength = 10;

function init() {
  const body = document.querySelector('body');
  body.addEventListener("keydown", checkKey);
  
}

function checkKey(key) {
  console.log(`Key Pressed: ${String.fromCharCode(key.which)} = keyCode ${key.which}`);
  if(keyPressArray.length < 10) {
    keyPressArray[keyPressArray.length] = key.which;
  }
  else {
    let flag = true;
    keyPressArray.splice(0,1);
    keyPressArray.push(key.which);
    for(let i=0;i<10;i++) {
      if(keyPressArray[i] !== keyCodes[i]) {
        flag = false;
        console.log(`Current keypress: ${keyPressArray[i]} Codes Array: ${keyCodes[i]}`)
      }
    }
    if(flag) {
      console.log(`Found the code, sending alert`);
      alert("BOOM!!! You found the secret code");
    }
  }
}
