const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var body = document.getElementsByTagName('body')[0];
function init() {
  var i = 0;
    body.addEventListener('keydown', function(e){
      const key = parseInt(e.which || e.detail);
      if (key === parseInt(code[i])){
  				i++;
  			} else{
  				i = 0;
  			}

  			if (i === code.length){
  				alert("Konami code entered");
  			}
  });
}

init();
