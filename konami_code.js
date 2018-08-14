var codes = [
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

var arr=[]; 
var n = 0;

function init() {
  document.addEventListener('keydown', function(e){
      
      arr.push(e.key);
      console.log(arr);
    
      for(let i=0; i<arr.length; i++){
        
          if(arr[i] === codes[i]){
             n = arr.length; 
             console.log(n);
          }
          else if(arr[i] !== codes[i])
              { 
                arr= []; 
                n = 0;
                break; }
      }
      
      if(n === 10){
      alert('yyy');
      arr = [];
      n = 0;}
  });
}
