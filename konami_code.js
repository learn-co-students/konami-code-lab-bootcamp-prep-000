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
  main = document.querySelector('body')
  testArray = []
  indexValue = 0
  
  function isTrue(array, trueArray) {
    testValue = 0
    for (let i = 0; i < trueArray.length; i++) {
        if (array[i] === trueArray[i]) {
            testValue++
        }
    if (testValue === trueArray.length) {
        return true
        }
    }
  }
  
  main.addEventListener('keydown', function(e) {
    if (e.key === codes[indexValue]) {
        testArray.push(e.key)
        indexValue++
        if (isTrue(testArray, codes) === true) {
            alert('You did it!')
            testArray = []
            indexValue = 0
            }
    } else {
        testArray = []
        indexValue = 0
    }
  })
}
