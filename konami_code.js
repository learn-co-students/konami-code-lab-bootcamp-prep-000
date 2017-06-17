
const body = document.querySelector('body');
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let sequence, count, comparison;
init();

body.addEventListener('keydown', function(evt){
	let key = parseInt(evt.detail || evt.which);
	sequence.push(key);
	comparison = code.slice(0, sequence.length);
	console.log(sequence, comparison, count);
	if(areTheyEqual(sequence, code) && count === code.length){
		alert('You found the Konami code');
		init();
	} else if(areTheyEqual(sequence, code)){
		count++;
	} else if(!areTheyEqual(sequence, comparison)){
		init();
	}
});

function init() {
	// your code here
	sequence = [];
	comparison = [];
	count = 1;
}


function areTheyEqual(arr1, arr2){
	return arr1.every((elm, i) => elm === arr2[i]);
}
