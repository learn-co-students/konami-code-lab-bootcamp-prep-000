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
var back = document.querySelector("body")
var thecode = []
var truth = 0
var wrong = 0
function konami(){
	return window.alert('congratulatory message')
}

function nope(){
	return window.alert('nope message')
}

function keychange(){
	for(var i = 0; i<thecode.length;i++){
		if (thecode[i] == "KeyA"){
			thecode[i] = "a"
		}else if (thecode[i] == "KeyB"){
			thecode[i] = "b"
		}
	else{
		console.log(thecode[i])
	}}
}
function theverdict(){
	for(var i = 0; i<thecode.length;i++){
		if (thecode[i] == codes[i]){
			truth = truth + 1
		} else{
			wrong = wrong + 1
		}
	}
}

function init() {
	// your code here
	back.addEventListener('keydown',function(event){
	thecode.push(event.code)
	keychange()
	if(thecode.length == 10){
		theverdict()
		if (truth == 10){
			alert('konami wins')
		} else {
			alert('this is 10')
		}
		thecode.length = 0
	}

})}

//back.addEventListener('keydown', function(event) {
//	 thecode.push(event.code)
//
//	 if (thecode.length == 10){
		 //Checking for KeyA and KeyB

//		 for(var i = 0; i<thecode.length;i++){
//			 if (thecode[i]=="KeyA"){
//				 thecode[i] = "a"
//			 }else if (thecode[i]=="KeyB"){
//				 thecode[i] = "b"
//			 } else{
//				 console.log("otherchar")
//
//			 }//End of checking
//			alert("this is at 10");
//			thecode.length = 0
//		 }
		 //Checking for right code
//		 for (var i = 0; i<thecode.length;i++){
//			 if (thecode[i]==codes[i]){
//		 	truth = truth+ 1
//			 }else {
//				 console.log (codes[i]+" is false")
//			 }
//		 }
//		 //end of checking for truth
//		 if(truth == 10){
//			 konami()
//			 thecode.length = 0
//			 truth = 0
//		 }else {
//			 thecode.length = 0
//			 truth = 0
//		 }
//	})
//end of addEventListener
//}//end of init()
// }
init()
