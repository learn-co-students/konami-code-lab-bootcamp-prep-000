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

var i = 0;

function init() 
{
  document.body.addEventListener('keydown', function(e) 
  {
    const key = e.key;
    
    if (key === codes[i])
    {
      i++;
      console.log(codes[i]);
      if (i === codes.length)
      {
        alert("Konami!!!");
        
        i = 0;
      }
    }
    else
    {
      i = 0;
    }
  });
}
