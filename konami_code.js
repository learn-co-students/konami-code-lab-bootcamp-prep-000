const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
{
let index = 0;

 function init() {
// your code here
 const input = document.body.addEventListener('keydown', (aKey) => {
 const key = parseInt( aKey.detail || aKey.which );
 console.log(key);
  if (index === code.length - 1) {
     alert("congrats");
     index = 0;
   }
  if (key === code[index]) {
      index++;
    } else { index = 0; }
  })
}
 }
