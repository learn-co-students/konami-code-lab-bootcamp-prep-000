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
//KONAMI CODE IS 10 keys entered
var enteredCode = []//Code that's entered
var theBodyTag = document.querySelector("body")//Selecting the Body tag
var correctCodeInput = 0 //How many code inputs was entered correctly
function init() {
	// your code here
	theBodyTag.addEventListener('keydown',function(event){ //adds listener to the body tag
		//checking for correct code entered when it's enough to check to see if is correct
		if (enteredCode.length === 10){ //checks to see if the code that was entered was 10 keypresses
			for(var i = 0; i<enteredCode.length;i++){ //Begins the check on the code is entered
				if (enteredCode[i] == codes[i]){ //if the code entered matches the konami code
					correctCodeInput = correctCodeInput + 1 //adds to the count of correct code that was inputed
					// console.log(enteredCode[i]+" is correct")
				} else{
					enteredCode.length = 0 //clears the code if entered incorrect
					correctCodeInput = 0 //clears the entire correct count
					// console.log("incorrect code")
				}
			} //end for loop to check for correct code
			while (correctCodeInput == 10){ //this activates if correct code count equals 10 which is the same amount for konami
				// console.log ("correct code")
				alert("Hurray!")//alert is notified when it's correct
				correctCodeInput = 0 //clears the entire correct count
				enteredCode.length = 0 //clears the code if entered incorrect
			}
		}else {
			enteredCode.push(event.key) //pushes entered Code into an array (enteredCode)
			// console.log(enteredCode)
		}
	})
}

init()
