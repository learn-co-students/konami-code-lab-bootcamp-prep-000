const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  function init() {
  // your code here
  var index = 0;


const body = document.getElementsByTagName('body');
document.body.addEventListener('keydown', function (e) {

const key = parseInt(e.which || e.detail)
 //console.log(key);
// console.log(code);

 if (key === code[index]){
 	index++;
 }else{
 	index = 0;
 }
  if (index === code.length){
  	 alert('YOU DI IT')
  }
  //console.log(index);

  })

}
