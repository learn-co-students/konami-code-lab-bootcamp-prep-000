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

let test_c = [];

document.body.addEventListener('keydown',function(e) {
test_c.push(e.key);

const index = test_c.slice(test_c.length-10,test_c.length);

let test_1 = codes.toString();
let test_2 = index.toString();
if (test_1 === test_2) {
  alert('Hurray');
}
});

}





