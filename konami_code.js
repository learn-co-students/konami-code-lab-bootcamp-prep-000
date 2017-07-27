// (function() { /* all code goes here */})();

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const body = document.querySelector(`body`);
index = 0;


function init()
{

body.addEventListener(`keydown`, function triggerKeyDown(e) {

  console.log(parseInt(e.detail || e.which));
  var key = parseInt(e.detail || e.which);

  if (key === code[index]){
    index++;
    if (index === code.length){
      alert(`Code accepted!`);
    }
  }

  else {
    index = 0;
  }
})
}
