const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const body = document.querySelector(`body`);
let index = 0;

function init(e){
	body.addEventListener(`keydown`, function(e){

		const key = parseInt(e.detail || e.which); 
				if(key === code[index]){
					index++;
					console.log(`${key} correct`);
				  if(index === code.length){
				  	alert(`You Made It`);
				  	index = 0;
				  	}
				  } else{
				  	console.log(`${key} wrong`);
				  	index = 0;
				  }
		});
}