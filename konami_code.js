const alphabet = ['a', 'b', 'c'];

let index = 0;
function init() {
  // your code here


  function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}



}
