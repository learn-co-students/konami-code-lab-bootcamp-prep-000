// // const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// // let index = 0;
// //
// // function init(e) {
// //   // Write your JavaScript code inside the init() function
// //   const key = parseInt(e.detail || e.which);
// //   console.log(e.detail);
// //   console.log(e.which);
// //   if (key === code[index]) {
// //     index++;
// //
// //     if (index === code.length) {
// //       alert('Hurray!');
// //
// //       index = 0;
// //     }
// //   } else {
// //     index = 0;
// //   }
// // }
// //
// // init();
// //
//
// if (window.addEventListener) {
//     var keys = [],
//         konami = "38,38,40,40,37,39,37,39,66,65";
//
//     window.addEventListener("keydown", function init(e){
//
//         keys.push(e.keyCode);
//
//         if (keys.toString().indexOf(konami) >= 0) {
//
//             alert('This is where the magic would happen');
//
//             keys = [];
//         };
//     }, true);
// };
//
// init();
