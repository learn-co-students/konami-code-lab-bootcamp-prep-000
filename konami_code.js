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
  // your code here
  let index = 0;
  function onKeys(e){
    const key = e.key;
    if (key === codes[index]){
      console.log(key, index, codes.length);
      index ++;
      if(index == codes.length){
        alert('Hurray');
        index = 0;
      }
    }else{
      index = 0;
    }
  }
  document.body.addEventListener('keydown', onKeys);
}
