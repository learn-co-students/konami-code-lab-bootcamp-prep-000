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

let index = 0;

function init() {
  // your code here
  const test = document.body
  test.addEventListener('keydown', function(event){
      const key = event.key;

      if(key === codes[index]){
        index++;
        if(index === 10){
        alert("Congratulations!")
        }
      }else{
        index = 0;
      }
  }  )
}
