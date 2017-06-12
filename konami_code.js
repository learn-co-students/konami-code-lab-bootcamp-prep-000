const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function init() {
  document.body.addEventListener('keydown', checkForKonamiCode);
}


function checkForKonamiCode(event){
  const key = parseInt(event.detail || event.which)

  console.log(`Index is ${index}`);
  console.log(`Key is ${key}`);


  if(index === 0 || index === 1){
    if(key === 38){
      index++;
      console.log(`Index is now ${index}`);
    }else{
      index = 0;
      console.log(`Index is now ${index}`);
    }
  }
  else if(index === 2 || index === 3){
    if(key === 40){
      index++;
      console.log(`Index is now ${index}`);
    }else{
      index = 0;
      console.log(`Index is now ${index}`);
    }
  }
  else if(index === 4 || index === 6){
    if(key === 37){
      index++;
      console.log(`Index is now ${index}`);
    }else{
      index = 0;
      console.log(`Index is now ${index}`);
    }
  }
  else if(index === 5 || index === 7){
    if(key === 39){
      index++;
      console.log(`Index is now ${index}`);
    }else{
      index = 0;
      console.log(`Index is now ${index}`);
    }
  }
  else if(index === 8){
    if(key === 66){
      index++;
      console.log(`Index is now ${index}`);
    }else{
      index = 0;
      console.log(`Index is now ${index}`);
    }
  }
  else{
    if(key === 65){
      alert("You've entered the Konami code!");
    }
  }
}







// function checkForKonamiCode(e){
//   console.log("I WAS CALLED");
//   console.log(e.which);
// }
