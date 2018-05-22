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

const peter = [
  'p',
  'v',
  'd'
  ];

let index = 0;
let body = document.querySelector('body');

function init() {
  // your code here
  
  body.addEventListener('keydown', function(e) {
    console.log(e.key);
    //alert('test');
    if (e.key === codes[index]) {
      index++;
      
      if (index === codes.length) {
        alert('yesss you did it!');
        console.log('konami');
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

//init();