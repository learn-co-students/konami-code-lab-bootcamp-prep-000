const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var count = 0;

  function eventHandler(e) {
    const key = parseInt(e.which||e.detail);
    if (key===code[count]){
      count++;
      if (count===code.length-1){
        alert('YOU DID IT!');
        count = 0;
      }
    }
    else {
      count = 0;
    }
  }
  
  document.body.addEventListener('keydown', eventHandler)

}
init();
