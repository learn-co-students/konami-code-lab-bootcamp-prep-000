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
  var index = 0;
  var getElement = document.querySelector("body")
  getElement.addEventListener('keydown', function(e)
  {
    var key = e.key
    if(key === codes[index])
    {
      index++
      if(index === codes.length)
      {
        alert("Congrats")
      }
    }
    else
    {
      index = 0
    }
  })
}
