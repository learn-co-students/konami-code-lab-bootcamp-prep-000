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
  let index = 0;
  document.body.addEventListener('keydown',function (e){
    const key = e.key;
    if(codes[index] === key){
      index++;
      console.log(index);
        if (index === codes.length){
    alert('Hurray!');
    console.log('Hurray!')
    index = 0;
  }
    }else{
      index = 0;
    }
  });
}
