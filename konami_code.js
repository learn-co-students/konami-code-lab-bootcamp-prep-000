const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
  var target = document.querySelector('body');
  target.addEventListener('keydown',checkKon);
  
 let index=0;
function checkKon(e){
  const key = parseInt(e.detail || e.which);
  //console.log("Target key: "+code[index]);
  if(key===code[index]){
    index++;
    //console.log(index);
    if(index===code.length){
      alert('you entered the code');
      index=0;
    }
  } else {
       index=0;
  }
}

  
  
}
