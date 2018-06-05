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

let index = 0 ;

 document.body.addEventListener('keydown',  function(e){

  const key = e.key;

  if(key == codes[index]){
    index++;
  //    alert(index));
    if(index==codes.length){
      alert("wtf u find my password!");
      index = 0;
    }
  }
  else{
    index = 0;
  }
})


function init() {

}
