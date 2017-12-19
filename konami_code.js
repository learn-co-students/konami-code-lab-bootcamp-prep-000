const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = [38, 38, 40, 40, 37, 39, 37, 39, 66,];

function init() {
  // Write your JavaScript code inside the init() function
  const kon = document.querySelector('body');
  kon.addEventListener('keydown', function(e){


      index.push(e.which);


      if(index.length == code.length){
        alert('You did it!');
      }
      console.log(index);
  })
}

init();
