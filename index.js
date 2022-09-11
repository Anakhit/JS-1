// 1.
// let user = {
//     firstname: "giorgi",
//     lastname: "smith",
//     age: 25,
//     studentstatus: "active"
// };

// console.log(user.studentstatus);

// ამოიღეთ user ცვლადის სტუდენტის სტატუსი;



//2.
/*შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული 
ელემენტი(for da while ციკლით);*/

// let array = [0, 6, 8, 3, "some", 'in']

// for (let i=0; i < array.length; i++){
//     console.log(array[i]);
// }
// let i = 0;
// while (i<array.length){
//     console.log(array[i]);
//     i++;
// }


//3.

// შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

// let array = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];



// for (let i=0; i<array.length; i++){
//     if ( array[i] > 5){
//         console.log(array[i]);
//      } 
// }


//4.

// let user = {
//     name: 'giorgi',
//     age: 20,
//     studentstatus: 'active'
// }

// for (let i=0; i<1; i++){
//     if(user.age<18 && user.studentstatus == "active" ){
//         console.log("Hello");
//     }else if(user.name=="levani"){
//         console.log("hello levani");
//     }else if(user.studentstatus == "active"||user.age<25 ){
//         console.log("hello world");
//     }else{
//         console.log("error");
//     }

// }

//5.
// let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'pinapple'];
// // გამოიტანეთ მარტო სრტინგები;

// for(let i=0; i<array.length; i++){
//     if(typeof array[i] == 'string'){
//         console.log(array[i]);
//     }
// }

//6.
/*მოცემული მასივიდან for ციკლის საშუალებით კონსოლში
გამოიტანეთ მხოლოდ დადებითი
რიცხვები:*/
// let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

// for (let item of array) {
//     for (let i of item) {
//         if (i > 0) {
//             console.log(i);
//         }
//     }
// }


//7.

// let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
// 1.ამოიღეთ მარტო ლუწი რიცხვები
// 2.ამოიღეთ კენტი რიცხვები

// for(let i=0; i<array.length; i++){
//     if(array[i] % 2 == 0){
//         console.log(array[i]);
    
// } //ლუწი

// for(let i=0; i<array.length; i++){
//     if(array[i] % 2 != 0){
//         console.log(array[i]);
//     }
// } //კენტი

//8.

// let users = [
//     {username: 'giorgi', status : false},
//     {username: 'levani', status : false},
//     {username: 'anna', status : true},

// ]

// for(item of users){
//     if(item.status == false){
//         console.log(item.username);
//     }
// }

