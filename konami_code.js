const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let i = 0;

function init() {

  //check for input here. REMEMBER —— NEED TWO ARGUEMENTS TO CHECK. ****SEE LISTENING TO NODES LAB FOR MORE***
  
        //remember to close event listener before finishing function. OTHERWISE FUNCTION WONT BE DEFINE
 document.body.addEventListener('keydown', function(e) { 

 //checks bot e.detail and e.which because no univeral support.
 const key = parseInt (e.detail || e.which);

      //checks to see if each index in the code array (defined above, outside of function, is equal to the input obtained in the function/)
      if (code[i] === key){
        //bump "i" so that it can check more of the array
        i++;

      //checks to see if the entire code is equal to key if the individual index passes
          if (code.length === i){
            alert ("Hurray!");
          }

      }

      else{
        //reset code to allow more attempts in event of failure above.
        i = 0;
      }
      
      //remember to close event listener before finishing function
});

}//end function here
