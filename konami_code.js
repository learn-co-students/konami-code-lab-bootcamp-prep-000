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

function init(e) {
  // your code here
  
  // console.log(`e = ${e.key} --- ${index} --- ${codes[index]}`);
  
  if (e.key === codes[index])
  {
    if (index < 9)
    {
      index ++;
    }
    else if (index == 9)
    {
      alert("HADOUKEN!!!");
      index = 0;
    }
  }
  else
  {
    index = 0;
  }
}

var index = 0;

document.body.addEventListener('keydown', init); 
