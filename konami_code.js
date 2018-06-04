const codes = [
 "38", "38", "40", "40", "37", "39", "37", "39", "66", "65"
];
let index = 0;
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
 if (key.keyCode == codes[index]) {
    index++;
  if (index==codes.length)
    {alert("Hoozah!");}
 } else {index=0;}
}