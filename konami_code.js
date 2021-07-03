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
  var index=0
  document.body.addEventListener('keydown',function(e){
        
      //console.log(parseInt(e.detail))
      const key= parseInt(e.detail||e.which)
    
      
      if(key===code[index]){
        index++
          if(index===code.length-1){
            alert("don't use cheat")
            index=0
          }
      }else{
        index=0
      }
  })
}
