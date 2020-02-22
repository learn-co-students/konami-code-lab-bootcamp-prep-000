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
  let index = 0;  
  
  document.body.addEventListener("keydown",
  function onKeyDownHandler(e)
  {
    const key = e.key;
    if(key === codes[index])
    {
      index++;
      if(index === codes.length)
      {
        window.prompt("You have entered z correct Kodes!", "You are the champion.");
      }
    }
    else
    {
      index = 0;
    }
    
  });
}
