const alphabet = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index=0
document.body.addEventListener('keydown', onKeyDownHandler)
function init()
{

}
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  console.log(key);
  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
