const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) { //type a key any key
      index++; //winning streak
      if (index === code.length) { //check if winning streak = 9 in a row
        alert("Congrats");
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
