  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  var index = 0;
  /*
function codething(inputAdd){
  inputArr.push(inputAdd.which);
  if(inputArr.length < code.length){
    for(let i = 0; i < inputArr.length;i ++){
      if(inputArr[i] != code[i]){
        inputArr = [];
      }
    }
  }
  else if( inputArr.lenth === code.length){
  if(inputArr === code){
    alert("congrats")
  }
}
}
*/

function init() {
  const main = document.querySelector('body');
  main.addEventListener('keydown', onKeyDownHandler)
}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)

  if (key === code[index]) {
    index++

    if (index === code.length - 1) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0
  }
}
