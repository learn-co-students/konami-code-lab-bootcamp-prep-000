const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
//Initial list of button presses, It could have been in numbers but too complex



function init(){
  let index = 0
  //Initial index
  document.body.addEventListener("keydown", onKeyDownHandler);
  //adds an event regarding keydown presses
  
  function onKeyDownHandler(e){
    const key = e.key;
    //sets a const variable to the key presses
    //This if statements compares the presses with the indexes of the code list to see if it fits, then if it does , increments, and if it hits the end of the list, sends the alert out, and resets back to zero
    if(key === codes[index]){
      index++;
      
      if (index === codes.length){
        alert('Hurray');
        index =0
      } 
    }else{
      index =0;
      
    }
    console.log(key);
  }

}

init()