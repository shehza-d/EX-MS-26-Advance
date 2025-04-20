// TS Compiler //p
// Type Annotations //p
// Type Inference //p
// Type Aliases //p
// Union Types //p
// Interfaces //p
// Type Aliases vs Interface //p
// Type Guards //p
// Generics //p
// Enums //p
// Tuples //p

// Type Annotations

// let user:string = "abdullah";
// user = "usman"
// let age:number = 20
// let isLoggedIn:boolean = true

// let fruits: string[] = ["asdsad" , "asdasd"]

// console.log(user);
// console.log(age);
// console.log(isLoggedIn);

// Type Inference

// let username = "Abdullah";
// username = 23

// let fruit = ['apple' , 'banana' , 'grape' , 'mango']
// console.log(fruit);

// Type Aliases

// type user = string
// let username:user = "abdullah"

// type User = {
//     name: string;
//     age: number;
//     email: string;
//     isLoggedIn?: boolean;
// }

// const manager = {
//     user: "mabdullah",
//     email: 'mabdullah@gmail.com'
// }

// manager.age = 19

// const user: User = {
//     name: 'abdullah',
//     age: 21,
//     email: 'mabdullah@gmail.com',
// }

// let city = {
//     name: 'karachi',
//     population: 240000000,
// }

// city.age = 20;

// type User = {
//     username: string;
//     age: number;
//     isLoggedIn?: boolean,
//     greetUser: ()=> void
// }

// const user: User = {
//     username: 'mabdullah',
//     age: 21,
//     greetUser: function (){
//         console.log(`hello ${this.username}`);
//     }
// }

// user.isLoggedIn = true
// user.greetUser();

//Union Types

// let user:string | number = 'mabdullah';

// let arr: (string | number)[] = ['dasd', 20]

// function greetUser(username:string , age: number): string{
//     return `hello ${username} with age ${age}`
// }

// console.log(greetUser('abdullah' , 20));

// function hello(arg: string | number){
//     if(typeof(arg) === 'string'){
//         return arg.toLowerCase()
//     }

//     return arg.toFixed(2)
// }

// console.log(hello(343));

// interface

// interface User {
//     username: string;
//     age: number;
//     isLoggedIn?: boolean,
//     greetUser: () => void
// }

// const user:User = {
//     username: "mabdullah",
//     age: 21,
//     greetUser: function (){
//         console.log(`hello ${this.username}`);

//     }
// }

// Type Aliases vs Interface

// interface Fruit  {
//     name: string;
//     state: string;
// }

// interface Mango extends Fruit {
//     price: number
// }

// const mango: Mango = {
//     name: 'mango',
//     state: 'sindh',
//     price: 2000,
// }

// Generic

// function identitytwo(arg: any): any {
//     return String(arg)
// }

// console.log(typeof identitytwo(20));

// function identity<T>(arg: T): T {
//     return arg
// }

// console.log(identity(20));

// Enum

// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
// }
// let currentDirection = CardinalDirections.North;

// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
//   }

// console.log(StatusCodes.NotFound);

// Tuples

// type user = [string, number , boolean ]

// let arr: user = ['sadsads' , 23 , true]

// arr.push('cde')
