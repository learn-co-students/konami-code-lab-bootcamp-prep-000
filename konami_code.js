//const code = [49, 50];

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

// add event listener

document.body.addEventListener('keydown', init, false);

// define init()

function init(e) {

  const key = parseInt(e.detail || e.which);

// log what keys were pressed

  console.log(key);
  console.log(index);

// alert when special code is entered

  if (key === code[index]) {
      index++;
      if (index === code.length) {
          window.alert('YOU WON!')
          index = 0;
      }
  }
  
  else {
          index = 0;
          console.log('resetting counter');
      }
}
