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

//var index = 0;
function init() {

  var index = 0;
  document.body.addEventListener('keydown', onKeyDownHandler);

  function onKeyDownHandler(e){
    const key = e.key;
    //console.log('key', key);

    if (key === codes[index]){
      index++;

      if (index === codes.length){
        alert('YOU DID IT!');
        index = 0;
      }
    }else{
      //alert('NOPE!');
      index = 0;
    }
  }
}
//init();
