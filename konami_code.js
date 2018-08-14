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
const main = document.querySelector('.main')
 
main.addEventListener('keydown', function(event){
    const keyPress = event.key;
    if (keyPress === codes[index]){
        index++;
        if (index === codes.length){
            alert('Konami Code Done!');
            index = 0;
        }} else { index = 0;}
  // alert(`${event.key} was clicked!`)
})