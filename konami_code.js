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
  var body = document.body
  
  let counter = 0

  body.addEventListener('keydown', function(e){
    console.log(e.key)

      const key = e.key;

      if(key === codes[counter]){
        counter += 1
        console.log(counter)

      }else{
        counter = 0
        console.log('back to 0')
      }

      if(counter === codes.length){
        counter = 0
        alert("Hurray!")
        console.log("Hurray!")
      }
    
  });
  
}
