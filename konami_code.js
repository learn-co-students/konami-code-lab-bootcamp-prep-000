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

function init()
{
  // your code here
  
  var x = 0;
  document.body.addEventListener('keydown', function(e)
  {
    //console.log(e.key);
    
    if(e.key === codes[x])
    {
      if (x == 9) { alert('HADOUKEN')}
      x++;
    }
    else {x = 0}
    
  });
}
