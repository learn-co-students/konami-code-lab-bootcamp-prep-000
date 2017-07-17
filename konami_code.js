const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
  var body = document.querySelector('body');

//  console.log(body);


  body.addEventListener('keydown',
  function onKeyDownHandler(e){
    const key = parseInt(e.detail);
    for(index = 0; index<code.length;index++)
    {

    if(key === code[index]){
    alert(`It is the number ${code[index]}`);
    cosole.log(`It is the number ${code[index]}`)}

    }
  })


}
