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
  let codeStore = [];

  function keyPress(e){
    e.stopPropagation();

    const key = e.key;
    console.log(key);
    if(key === codes[index]){


      codeStore.push(key);

      if(codeStore.length === codes.length){
        console.log('codeStore Length', codeStore.length);
      if(JSON.stringify(codeStore) === JSON.stringify(codes)) {
          console.log('CONGRATS')
            alert('Congratulations, you cracked the code!');

            codeStore = [];
            index = 0;

        }
      }
      index++;

    } else {
      index = 0;
      codeStore = [];
      console.log(index, 'restart');

    }

  }
  document.body.addEventListener('keydown', keyPress, true);

}
