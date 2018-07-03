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

var enteredCode = []//Code that's entered
var theBodyTag = document.querySelector("body")
var correctCodeInput = 0 //How many code inputs was entered correctly
function init() {
	// your code here
	theBodyTag.addEventListener('keydown',function(event){
		//checking for correct code entered when it's enough to check to see if is correct
		if (enteredCode.length === 10){
			for(var i = 0; i<enteredCode.length;i++){
				if (enteredCode[i] == codes[i]){
					correctCodeInput = correctCodeInput + 1
					// console.log(enteredCode[i]+" is correct")
				} else{
					enteredCode.length = 0 //clears the code if entered incorrect
					correctCodeInput = 0
					// console.log("incorrect code")
				}
			} //end for loop to check for correct code
			while (correctCodeInput == 10){
				// console.log ("correct code")
				alert("Hurray!")
				correctCodeInput = 0
				enteredCode.length = 0
			}
		}else {
			enteredCode.push(event.key) //pushes entered Code into an array (enteredCode)
			console.log(enteredCode)
		}
	})
}

init()
