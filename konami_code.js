const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;
  
  const body = document.getElementsByTagName('body')[0];
 
  body.addEventListener('keydown', function(event) {
    const key = parseInt(event.detail || event.which);
    console.log(key);
  
  if (key === code[index]) {
    index++;
 
    if (index === code.length) {
      alert("Congratulations! You've successfully keyed the Konami Code!!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
  
  });

}