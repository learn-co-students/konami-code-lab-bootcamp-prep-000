const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var keypresses = [];

function init() {
  //Add event listeners
  var detector = document.querySelector('#detector');
  detector.addEventListener('keydown', detectKeys);
}

function detectKeys(e){
  let key = e.detail || e.which;
  
  //If key history is full, remove elment from beginning
  if (keypresses.length === 10){
    keypresses.shift();
  }
  //Bug catcher
  else if (keypresses.length > 10){
    console.log(`Something went wrong. There are ${keypresses.length} elements in keypresses`);
    keypresses.length = 9;
  }
  
  //Add new key to end of array
  keypresses.push(key);
  
  //Count how many elements in array are correct
  let correct = 0;
  if (keypresses.length === 10){
    for(let i = 0; i < keypresses.length; i++){
      if (parseInt(keypresses[i]) === code[i]){
        correct += 1;
      }
    }
  }
  
  //If all 10 are correct, throw alert
  if (correct === 10){
    alert("Neva gunna give you up, neva gunna let you doowwwnn");
  }
}