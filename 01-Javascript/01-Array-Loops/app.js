// var
// let
// const

// let username = "abdullah";
// let age = 21;

// console.log(`your name is ${username} and your age is ${age}`);

// function greetUser(username){ // parameter receive krna
//     return `hello ${username}`
// }

// var func = greetUser('usman')
// console.log(greetUser('abdullah'));
// console.log(func);

// argument

//  for(let i = 0; i < 10; i++){
//     console.log(i);

//  }

// const fruits = ['apple' , 'banana' , 'grapes' , 'mangoes']

// console.log(fruits);

// index
// length

// const ul = document.querySelector('.list')

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
//     ul.innerHTML += `<li>${fruits[i]}</li>`

// }

// const user = {
//     fullName: 'Muhammad Abdullah',
//     age: 21,
//     email: 'mabdullah@gmail.com',
//     isLoggedIn: true,
//     hobbies: ['cooking' , 'eating' , 'sleeping'],
//     greetUser: function (){
//         return `hello ${this.fullName}`
//     }
// }

// user.newProp = "new property" // new prop
// user.fullName = "usman" // update prop
// delete user.age // delete prop
// console.log(user);

// hoisting

// var username = null;
// console.log(typeof username);

// console.log(username);
// var username = "abdullah"

// arrow function

// console.log(greetUser('abdullah'));
// function greetUser(username){
//     return `hello ${username}`
// }

// const greetUser = username => `hello ${username}`

// normal function hoisting support krta ha
// arrow function nahi krta

// callback function
// higher order function

// foreach
// map
// filter
// reduce

// const fruits = [
//     "Apple",
//     "Banana",
//     "Orange",
//     "Mango",
//     "Pineapple",
//     "Grapes",
//     "Strawberry",
//     "Blueberry",
//     "Peach",
//     "Pear",
//     "Watermelon",
//     "Kiwi"
// ];

// console.log(fruits);
// const ul = document.querySelector('.list')

// fruits.forEach(function(item){
//     console.log(item);
// })

// const foreachMethod = fruits.forEach((item , index)=>{
//     ul.innerHTML += `<li>${item} ${index}</li>`
//     return item + " marzi meri"
// })

// const mapMethod = fruits.map((item , abdullah , arr)=>{
//     ul.innerHTML += `<li>${item} ${abdullah}</li>`
//     return item + " marzi meri"
// })

// console.log('foreach ==>' , foreachMethod);
// console.log('map ==>' ,mapMethod);

// foreach return nahi kraiga
// map return kraiga.

// fruits.map(function(){
// })

// fruits.map(()=>{

// })

// wo function jo kisi bhi function ka argument ma pass hojaye wo callback function haa

// wo function jo apna argument ma callback la wo higher order function ha.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const total = num.map(item => item + 10)
// console.log(total);

// const filterArray = num.filter((item)=>{
//     return item > 5
// })
// const filterArray = num.filter(item => item < 5)

// console.log(filterArray);

// num.map((item)=>{
//     return item
// })

const products = [
  // Electronics
  {
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    brand: "Logitech",
  },
  {
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    brand: "Samsung",
  },
  {
    name: "LED Monitor",
    price: 129.99,
    category: "Electronics",
    brand: "Dell",
  },
  {
    name: "Bluetooth Speaker",
    price: 45.99,
    category: "Electronics",
    brand: "JBL",
  },
  {
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    brand: "Apple",
  },

  // Footwear
  {
    name: "Running Shoes",
    price: 59.99,
    category: "Footwear",
    brand: "Nike",
  },
  {
    name: "Sneakers",
    price: 75.99,
    category: "Footwear",
    brand: "Adidas",
  },
  {
    name: "Sandals",
    price: 25.99,
    category: "Footwear",
    brand: "Teva",
  },
  {
    name: "Formal Shoes",
    price: 120.0,
    category: "Footwear",
    brand: "Clarks",
  },
  {
    name: "Boots",
    price: 150.0,
    category: "Footwear",
    brand: "Timberland",
  },

  // Home Appliances
  {
    name: "Blender",
    price: 34.99,
    category: "Home Appliances",
    brand: "Oster",
  },
  {
    name: "Microwave Oven",
    price: 99.99,
    category: "Home Appliances",
    brand: "Panasonic",
  },
  {
    name: "Air Conditioner",
    price: 299.99,
    category: "Home Appliances",
    brand: "LG",
  },
  {
    name: "Vacuum Cleaner",
    price: 149.99,
    category: "Home Appliances",
    brand: "Dyson",
  },
  {
    name: "Toaster",
    price: 29.99,
    category: "Home Appliances",
    brand: "Breville",
  },

  // Stationery
  {
    name: "Notebook",
    price: 3.99,
    category: "Stationery",
    brand: "Moleskine",
  },
  {
    name: "Pen Set",
    price: 12.99,
    category: "Stationery",
    brand: "Parker",
  },
  {
    name: "Highlighters",
    price: 5.99,
    category: "Stationery",
    brand: "Sharpie",
  },
  {
    name: "Stapler",
    price: 7.99,
    category: "Stationery",
    brand: "Swingline",
  },
  {
    name: "Planner",
    price: 14.99,
    category: "Stationery",
    brand: "Erin Condren",
  },

  // Furniture
  {
    name: "Desk Chair",
    price: 89.99,
    category: "Furniture",
    brand: "Ikea",
  },
  {
    name: "Coffee Table",
    price: 129.99,
    category: "Furniture",
    brand: "West Elm",
  },
  {
    name: "Sofa",
    price: 499.99,
    category: "Furniture",
    brand: "Ashley Furniture",
  },
  {
    name: "Bookshelf",
    price: 79.99,
    category: "Furniture",
    brand: "Sauder",
  },
  {
    name: "Dining Table",
    price: 399.99,
    category: "Furniture",
    brand: "Pottery Barn",
  },

  // Fitness
  {
    name: "Yoga Mat",
    price: 19.99,
    category: "Fitness",
    brand: "Gaiam",
  },
  {
    name: "Dumbbells",
    price: 49.99,
    category: "Fitness",
    brand: "Bowflex",
  },
  {
    name: "Treadmill",
    price: 699.99,
    category: "Fitness",
    brand: "NordicTrack",
  },
  {
    name: "Resistance Bands",
    price: 14.99,
    category: "Fitness",
    brand: "Fit Simplify",
  },
  {
    name: "Exercise Bike",
    price: 299.99,
    category: "Fitness",
    brand: "Peloton",
  },

  // Kitchen Appliances
  {
    name: "Coffee Maker",
    price: 49.99,
    category: "Kitchen Appliances",
    brand: "Keurig",
  },
  {
    name: "Air Fryer",
    price: 89.99,
    category: "Kitchen Appliances",
    brand: "Ninja",
  },
  {
    name: "Stand Mixer",
    price: 199.99,
    category: "Kitchen Appliances",
    brand: "KitchenAid",
  },
  {
    name: "Refrigerator",
    price: 799.99,
    category: "Kitchen Appliances",
    brand: "Whirlpool",
  },
  {
    name: "Dishwasher",
    price: 399.99,
    category: "Kitchen Appliances",
    brand: "Bosch",
  },
];

// const filteredProduct = products.filter(item => item.category === 'Fitness' && item.price < 500)

// console.log(filteredProduct);

// chaining

// const filteredProduct = products.map(item => item.price).filter(item => item < 500)

// console.log(filteredProduct);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filtered = num.filter(item => item > 5);
// console.log(filtered);

// const filterProduct = products.filter(item => item.category === 'Kitchen Appliances')
// console.log(filterProduct);

// const div = document.querySelector('.container');

// function renderItem(arr){
//     div.innerHTML = ""

//     arr.map(item => {
//         div.innerHTML += `
//          <div class="card">
//                 <h3>Name: ${item.name}</h3>
//                 <h3>category: ${item.category}</h3>
//                 <h3>price: ${item.price}</h3>
//         </div>
//         `
//     })
// }

// renderItem(products)

// function filteredItem (items){
//     console.log(items.innerHTML);
//     const filterProduct = products.filter(item => item.category == items.innerHTML)
//     console.log(filterProduct);
//     renderItem(filterProduct)

// }

// reduce
