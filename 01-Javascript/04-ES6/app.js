// Variable Scoping //p
// Closure //p
// lexical scoping //p
// Modules //R
// Object Methods (keys,values,freez,entries) //p
// Exponentiation Operator //p
// Optional chaining //p
// Destructuring //p
// Template literals //p
// Default parameters 
// Rest parameter //p
// Spread Operator //p
// Enhanced object literals //p
// Iterators & For..of  
// Ternary Operator 
// Reduce
// post and pre increment 
// bigint
// symbol








// Variable Scoping

// var
// reassign
// redeclare

// let
// reassign

// const


// var username = "Abdullah";
// username = "usman"; // reassign
// var username = "ammar" // redeclare
// console.log(username);


// let username = "Abdullah";
// username = "usman"; // reassign
// // let username = "ammar" // redeclare xx
// console.log(username);



// const username = "abdullah";



// local variable
// global variable

// function scope | var
// block scope | let const



// var username = "Abdullah"
// function greetUser(){
//     console.log(username);
//     var insideFunc = "inside function"

//     console.log("hello user");

// }

// console.log(insideFunc);

// // greetUser()


// if(true){
//     let city = "karachi"
// }

// console.log(city);



// Closure 

// function outerFunc(){
//     console.log("outer func")

//     function innerFunc(){
//         console.log("inner function");

//     }


//     return innerFunc
// }

// // const func = outerFunc()
// // func()


// outerFunc()()



// lexical scoping

// function outerFunc(){
//     let a = "abdullah";
//     console.log(a);


//     function innerFuncOne(){
//         var b = "usman"
//         console.log('first func ===> ' , a);

//     }
//     function innerFuncTwo(){
//         var c = "Ammar"
//         console.log('second func ===> ' , a);
//     }

//     innerFuncOne()
//     innerFuncTwo()
// }

// outerFunc()



// Object Methods (keys,values,freez,entries) 


// const user = {
//     fullName: 'Muhammad Abdullah',
//     email: 'mabdullah@gmail.com',
//     age: 21,
//     isLoggedIn: true,
//     hobbies: ['eating' , 'sleeping' , 'coding']
// }

// Object.freeze(user)

// user.fullName = "Usman";
// delete user.age;
// user.newKey = "abc"
// console.log(user);


// const keys = Object.keys(user)
// console.log(keys);

// const keys = Object.values(user)
// console.log(keys);

// const keys = Object.entries(user)
// console.log(keys);




// Exponentiation Operator 

// console.log(5 ** 5);
// console.log(5 * 5 * 5 * 5 * 5);






// Optional chaining

// const adventurer = {
//     name: "Alice",
//     cat: {
//         name: "Dinah",
//     },
// };

// const dogName = adventurer.dog?.name;
// console.log(dogName);



// Spread Operator

// const user = ['abdullah' , 'usman' , 'ammar'];
// const user2 = ['ubaid' , 'faizan' , 'faraz'];

// const newArr = [...user , ...user2]
// console.log(newArr);


// const user = {
//     fullName: 'Muhammad Abdullah',
//     email: 'mabdullah@gmail.com',
//     hobbies: ['eating', 'sleeping', 'coding'],
// }

// const newUser = {
//     ...user,
//     age: 21,
//     isLoggedIn: true,
// }

// console.log({...user});







// rest Operator


// function usersList(...users){
//     console.log(users);   
// }

// usersList('abdullah' , 'usman' , 'ammar' , 'affan')




// Destructuring


// const user = {
//     fullName: 'Muhammad Abdullah',
//     email: 'mabdullah@gmail.com',
//     age: 21,
//     isLoggedIn: true,
//     hobbies: ['eating' , 'sleeping' , 'coding']
// }

// const {fullName: meriMirzi , email} = user

// console.log(meriMirzi);
// console.log(email);

// console.log(user.age);
// console.log(user.email);




// const arr = ['abdullah', 'usman', 'ammar', 'affan'];

// const [name , name1 , name2 , name3] = arr
// const [, secondVal, , name] = arr
// console.log(arr[2]);

// console.log(secondVal);



// Template literals

// const username = "Abdullah";
// const age = 21;

// console.log("your name is " + username + " and your age is " + age);

// console.log(`your name is ${username} and your age is ${age}`);

// console.log(`
    
//     dsdfsd
    
//     sdfdsf`);





// Default parameters

// function greetUser(username = "abdullah"){
//     console.log(`hello ${username}`);
    
// }
// greetUser("usman")



// Enhanced object literals 

// var fullname = "Abdullah"; 
// var color = "Brown"; 
// var age = 21;


// const user = {
//    fullname,
//    color,
//    age
// }

// console.log(user);
