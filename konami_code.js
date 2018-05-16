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
  // your code here
  let index = 0;
  
   // function onKeyDownHandler(e) {
    document.body.addEventListener("keydown", (e) => {
    const key = e.key;
    
    
    /* if (key === codes[index]) {
      index++; */ 
      
      index = (codes[index] === key) ? ++index : 0
      
        if (index === codes.length) {
          window.alert('Congratulations! You know the Konami code!');
          
          index = 0;
        }
    
    })
    
}
  


  

