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

//let array = []
function init() {
  index=0
  document.body.addEventListener('keydown', function(e){
    var key = e.key
    if (codes[index] === key){
      index++;
    }else{
      index=0
    }
     
     if (index === codes.length) {
      alert("Hurray!");
 
      index = 0;
    }
    //console.log(e.key)
  /*  for(var i=0; i<e.length; i++)
        array.push(e.which)
         if (array === codes){
          alert ('Yay!');
          index = 0;
         }*/
})
}
