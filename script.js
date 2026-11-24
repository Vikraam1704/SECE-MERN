// Print Message
// console.log("Hello World");

// Variable Declaration and Initialization (var,let,const)
// var - ReDeclare - Reinitialize
// var a;
// a=10;
// var a = "vikraam"
// console.log(a);

// let - Cannot Redeclare - Reinitialize
// let b;
// b = 20;
// b = 25
// console.log(b);

// let - Cannot Redeclare - Cannot Reinitialize
// const c = 30;
// console.log(c);


// var a = 10;
// var b = "10";
// console.log(a != b);
// console.log(a !== b);

// // Data Type (Primitive)
// var mark = 10;
// var name = 'vikraam';
// var present = true;
// var bigInt = 123456789n;
// var sym = Symbol('h1');
// var a;
// var b = null;

// console.log(typeof mark);
// console.log(typeof name);
// console.log(typeof present);
// console.log(typeof bigInt);
// console.log(typeof sym);
// console.log(typeof a);
// console.log(typeof b);

// // Non - Primitive
// var arr = [1,2,3,4];
// console.log(typeof arr);

// var obj = {
//     name : "Vikraam",
//     dept : "MERN"
// }
// console.log(typeof obj)

// var flag = false;
// if(flag){
//     const b = 20;
//     console.log("if Condition");
// }
// console.log(b);

// // String Literals
// var num = 9;

// if(num%2===0){
//     console.log(`${num} is a Even Number`);
// }
// else{
//     console.log(`${num} is a Odd Number`)
// }

// var mark = 98;
// if(mark >= 90){
//     console.log("O Grade")
// }
// else if(mark >= 70){
//     console.log("A Grade");
// }
// else if(mark >= 50){
//     console.log("B Grade");
// }
// else if(mark >= 35){
//     console.log("Pass")
// }
// else{
//     console.log("Fail");
// }

// // //Arrow Funtion
// // let add = (a,b)=> {
// //     console.log(a + b);
// // }

// // add(10,20);

// // var sub = () => {
// //     console.log(10 - 20)
// // }
// // sub();

// var Day = 2;

// switch(Day){
//     case 1: {
//         console.log("Sunday");
//         break;
//     }
//      case 2: {
//         console.log("Monday");
//         break;
//     }
//      case 3: {
//         console.log("Tuesday");
//         break;
//     }
//      case 4: {
//         console.log("Wednesday");
//         break;
//     }
//      case 5: {
//         console.log("Thursday");
//         break;
//     }
//      case 6: {
//         console.log("Friday");
//         break;
//     }
//      case 7: {
//         console.log("Saturday");
//         break;
//     }
//     default:{
//         console.log("Invalid Input");
//     }
// }

// var arr = [1,2,3,4,5];

// var mulTwo = arr.map((n)=> n*2);
// console.log(mulTwo);

// var even = arr.filter((n)=>n%2!==0);
// console.log(even)

// var sum = arr.reduce((tot,n)=>tot+n,0);
// console.log(sum)

// var evenSum = arr.filter(n => n%2===0)
//                  .reduce((tot,n)=> tot+n, 0);
// console.log(evenSum);

// var evenTotal = arr.map((ele) => ele*2)
//                     .filter((ele) => ele%2===0)
//                     .reduce((tot,ele)=>tot+ele, 0);
// console.log(evenTotal);

// var arr = [1,2];

// var newArr = [...arr,3,4,5];

// console.log(newArr);

// var stud = [{
//     name:"vikraam",
//     mark:89
// },
// {
//     name:"Raja",
//     mark:99
// }
// ];

// Spread Operator
// var newStud = [...stud,{
//     name : "Dhivya",
//     mark:98
// }]

// console.log(newStud);

// // Destructuring Operator
// var [m1,m2,m3,m4,m5] = [91,92,93,94,95];
// console.log(m1)
// console.log(m2)
// console.log(m3)
// console.log(m4)
// console.log(m5)

// var {name,email,mobile,mark,present} = {
//     name : "vikraam",
//     email : "vikraam17@example.com",
//     mobile : 9876543210,
//     mark : 99,
//     present : true
// }

// console.log(name);
// console.log(email);
// console.log(mobile);
// console.log(mark);
// console.log(present);

// var arr = [1,2,3,4,5];

// for(let ind in arr){
//     console.log(ind);
// }
// console.log("------------")
// for(let val of arr){
//     console.log(val);
// }

// var obj = {
//     name : "vikraam",
//     email : "vikraam17@example.com",
//     mobile : 9876543210,
//     mark : 99,
//     present : true
// }
// for(let key in  obj){
//     console.log(key +" : "+obj[key])
// }

// // Callback function
// const result = (message) =>{
//     console.log(message);
// }

// const add =(a,b,result) =>{
//     result(a+b);
// }

// add(10,20,result);

// const promise = new Promise((reject,resolve)=>{
//     setTimeout(()=>{
//         var success = false;
//         if(success){
//             return resolve("API Works");
//         }
//         else{
//             return reject("FETCH Failed")
//         }
//     },3000)
// })

// setTimeout(()=>{
//     console.log("Hello Everyone!!!")
// },5000)

// promise.then((message)=>console.log(message))
//     .catch((err)=>console.log(err));

const getData1 =  () => {
    return fetch("https://jsonplaceholder.typicode.com/posts");
}
getData1().then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err) => console.log(err));

// console.log("-----------------------------------------")

// const getData =  async() => {
//         try{
//             var res = await fetch("https://jsonplaceholder.typicode.com/posts");
//             const data = await res.json();
//             console.log(data);
//         }
//         catch(err){
//             console.log(err);
//         }
// }
// getData()