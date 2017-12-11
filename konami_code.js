const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var body = document.querySelector("body")

function init() {
  // Write your JavaScript code inside the init() function
    var index = 0;
    body.addEventListener("keydown", function(e){
      var key = parseInt(e.which || e.detail);
      
      if(key === code[index]){
        index++;
        
        if(index === code.length){
          alert("You  won")
          index = 0;
        
        }
      } else {
        index = 0;
      }
    })
  
}