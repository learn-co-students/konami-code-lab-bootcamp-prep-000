const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {

  var index = 0
  // your code here
  //set up keylistener on document.body for keyDown events
  document.body.addEventListener('keydown',function(e){
    //grab the key being pressed
    const key = parseInt(e.detail || e.which)

    //test if key matches for code[index]
    if(key === code[index]){
      //key matches so we increment index to test for next keypress
      index++

      //if index is same length as code then you pressed all the keypress
      if(index === code.length-1){
        alert('Congratz!!!')
        //reset index to 0
        index = 0
      }
    }else{
      //key did not match, reset index to 0
      index = 0
    }
  })
}
