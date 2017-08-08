const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

const listen = document.body

let index = 0;

function keyDownHandler(e)
{
  const key = parseInt(e.detail || e.which);

  if(key === code[index])
  {
    index++;
  }
  else {
    index = 0;
  }
  if(index === code.length)
  {
    alert("You did it!");

    index = 0;
  }
}
listen.addEventListener('keydown',keyDownHandler)
}
