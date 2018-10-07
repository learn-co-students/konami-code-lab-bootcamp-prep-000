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
  
  let index = 0
  
  document.body.addEventListener('keydown', function(e){
    const key = e.key;
    if (key === codes[index]) {
    console.log(key);
    console.log(index);
    index += 1;
    if (index === codes.length){
      alert("Konami Code activated");
      console.log("Konami Code activated");
      index=0;
    }
    }else{
      index = 0;
    }
  });
}

//init()
