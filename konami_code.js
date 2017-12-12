const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(){
  const keyboardEvent = document.createEvent("KeyboardEvent")

  const body = document.querySelector('body')

  let index = 0
  document.body.addEventListener('keydown', function(e){

    if (parseInt(e.which || e.detail) === code[index]){
        index++

        if (index ===code.length){
          alert("YAY!")
          console.log("Got it")
        }
      }
     else{
      index = 0
    }})}

    init()

















//tasks//
//create event listener for keyboard//
//create a function that listens for a specific event //
    //if that occurs, enter a function that listens for a second event//
      //and so on//
        //create a function so that if code is completed, an alert with message gets printed//
//if code is not entered properly, listener events always restart//
