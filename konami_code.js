
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

document.addEventListener('keydown', onKeyDownHandler, true);

let index = 0;

function init() {

}


function onKeyDownHandler(e)
{
  init()
  const key = e.key;

  if(key === codes[index])
  {
    index ++;

    if(index === codes.length){

      alert("you found the code!");
      index = 0
    }
  }
  else
  {
    index = 0;
  }
}
