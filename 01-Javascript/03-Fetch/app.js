// console.log('hello world!');

// API
// promises chaining

// function getAdmission(age) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (age > 18) {
//                 resolve('admission miljayega')
//             } else {
//                 reject('admission nahi milaiga')
//             }
//         }, 1000);
//     })
// }

// then catch
// getAdmission(21)
//     .then(res => {
//         return res + " return krdia ha"
//     }).then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// async await

// const func = async () => {
//     try {
//         const response = await getAdmission(12);
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }

// func()

// backend ka saath communicate kaisa krainga.
// API krainga

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     return res.json()
// }).then((res)=>{
//     console.log(res);

// }).catch((err)=>{
//     console.log(err);

// })

// async function getUsers() {
//     try {
//         const data = await fetch('https://jsonplaceholder.typicode.com/users')
//         const response = await data.json();
//         console.log(response)
//     } catch (error) {
//         console.log(error);

//     }
// }
// getUsers()

// const div = document.querySelector('.container');
// const loading = document.querySelector('.loading');

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => {
//         loading.innerHTML = ""
//         json.map(item => {
//             console.log(item);
//             div.innerHTML += `<p>${item.name}</p>`
//         })
//     })
//     .catch((err)=>{
//         console.log(err);

//     })

// https://www.npmjs.com/package/axios
// <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>

// const div = document.querySelector('.container');
// const loadingSpinner = document.querySelector('.loading-spinner');

// axios('https://fakestoreapi.com/products')
// .then((res)=>{
//     console.log(res.data);
//     res.data.map(item => {
//         div.innerHTML += `
//         <div class="card" style="width: 18rem;">
//             <img width="300" height="300" src="${item.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${item.title.slice(0 , 15)}...</h5>
//                 <p class="card-text">${item.description.slice(0 , 30)}...</p>
//                 <p class="card-text">Rs: ${item.price}</p>
//                 <a href="#" class="btn btn-primary">Add to cart</a>
//             </div>
//         </div>
//         `
//     })
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     loadingSpinner.className = "d-none"
// })

// clone https://weather-322.web.app/

// const form = document.querySelector('#form');
// const city = document.querySelector('#city');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(city.value);
//     axios(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`)
//     .then(res => {
//         console.log(res.data);
//     }).catch(err => {
//         console.log('error ==> ' , err);
//         alert('no city found')

//     })

// })

// axios('https://api.github.com/users/abdulmuqeet2005')
// .then(res => {
//     console.log(res.data);
// }).catch(err => {
//     console.log(err);

// })
