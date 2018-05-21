
let index = 0;

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
    document.body.addEventListener('keydown', (event) => {

    const keyName = event.key;
   
    keyName === codes[index] ? index++ : index = 0;

    if (index === 10){
      alert('God Mode Active');
    }
  });

}
