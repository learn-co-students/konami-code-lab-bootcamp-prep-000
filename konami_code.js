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
  var body = document.body;
  var index = 0;
  var codesTemp = codes;
  
  body.addEventListener('keydown', function(e)
  {
    const key = e.key;
    console.log(`Last Key Pressed: ${key}, waiting for ${codesTemp[index]}`);
    if(key == codesTemp[index])
    {
      if(index == codesTemp.length - 1)
      {
        index = 0;
        alert('Well Played!');
      }
      else index++;
    }
    
    else
    {
      index = 0;
      console.log("RESET CODE");
    }
  });
  
  
}
