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
function cleanslate(){
  truth = 0
  wrong = 0
  thecode.length = 0
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
      cleanslate()
		} else {
			alert('wrong code')
      cleanslate()
		}

	}

})

}

init()
