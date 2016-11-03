const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;
function init()
{
  document.addEventListener('keydown', function(event)
  {
    var key = parseInt(event.detail || event.which);
    if (key === code[index])
    {
      index++;
      if (index === code.length - 1)
      {
        alert('YOU DID IT!');
        index = 0;
      }
    } else
     {
      index = 0;
    }
  });
}
