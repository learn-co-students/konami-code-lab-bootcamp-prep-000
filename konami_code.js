const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var count=0;
  function congrats(e){
    console.log(count);
    console.log('hi');
    if( (count===0 || count===1) && (e.which ==38 || e.detail == 38)){count++;}
    else if( (count===2 || count===3) && (e.which ==40 || e.detail == 40)){count++;}
    else if( (count===4 || count===6) && (e.which ==37 || e.detail == 37)){count++;}
    else if( (count===5 || count===7) && (e.which ==39 || e.detail == 39)){count++;}
    else if( (count===8) && (e.which ==66 || e.detail == 66)){count++;}
    else if( (count===9) && (e.which ==65 || e.detail == 65)){alert('Congratulations!!!!');}
    else{ count=0;}

  }
  document.body.addEventListener('keydown', congrats);
  // your code here
}
