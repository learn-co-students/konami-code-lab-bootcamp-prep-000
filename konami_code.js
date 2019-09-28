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
/////////////////////////////
document.addEventListener('keydown', 
  function(e) {
    // get the value of the key code from the key map
    const key = e.key;
    var requiredKey = codes[index];

    // compare the key with the required key
    if (key === codes[index]) {
    console.log('key: '+ key + ' V: ' + codes[index] + 'Index: ' + index);
    index++;

    // if the last key is reached, activate cheats
    if (index === codes.length) {
      console.log('You Did the Code!!! ----------');
      window.alert("Hurray");
      index = 0;
    }
  } else {
    index = 0;
  }
});
}