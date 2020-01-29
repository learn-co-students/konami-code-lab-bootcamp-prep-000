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

 
  
function init() {
  var keyTrack = 0
  document.body.addEventListener('keydown', function(event) {
       if(event.key === codes[keyTrack]){
          console.log(`${codes[keyTrack]} sucessfully entered`)
          codes.shift()
          if(codes.length === 0){
            alert("code entered suceesfully")
             }
          }
      }
  )
}

init()

