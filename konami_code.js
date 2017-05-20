var code=[38, 38, 40, 40, 37, 39, 37, 39, 66, 65];


function init() {
  var index= 0;
  document.body.addEventListener('keydown', function(e){
    var key=parseInt(e.which || e.details);
    if (key===code[index]) {
      console.log(index);
      index++;
      if(index===code.length) {
        alert("Konami Code Entered.");
        index=0;
      }
    } else {
      index=0;
    }
  });
}
