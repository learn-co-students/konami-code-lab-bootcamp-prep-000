const code = [49, 50];

// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

var e = window.event;

// add event listener

document.body.addEventListener('keydown', init, false); 

// define init()

function init(e) {

  const key = parseInt(e.detail || e.which);

// log what keys were pressed

  console.log(e.which);
  
// alert when special code is entered

  if (key === code[index]) {
    index++;

      if (index === code.length-1) {
          window.alert('YOU WON!')
          index = 0;
      } 

      else {
          index = 0;
      }
  }
}