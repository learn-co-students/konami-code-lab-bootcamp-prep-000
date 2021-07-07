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

const clen = codes.length;
let pos = 0;


function init() {
  // your code here
  document.body.addEventListener('keydown', function(event){
  const k = event.key;
  
  if(k === codes[pos]){
        pos++;
    
    if(pos === clen)
    {
      alert("Huraaay!!");
      pos =0;
    }
  }else{
    
    index = 0;
  }
});
}{}


