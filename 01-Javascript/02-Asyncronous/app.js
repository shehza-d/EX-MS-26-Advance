// what is sync and async

// console.log('hello world 1')
// console.log('hello world 2')
// console.log('hello world 3')
// setTimeout(() => {
//     console.log('hello world 4')
// }, 0);
// console.log('hello world 5')

// javascript kiya sync ya async

// async kaisa pata chalaiga async code ha js maa

// settimeout
// setinterval
// promise .then.catch
// async await
// fetch
// axios

// console.log("hello world");

// var data laa ao = USA sa data ki request ki haa
// console.log(data)

// callback
// promises

// pending
// fulfilled
// rejected

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (10 > 5) {
//             console.log('promise resolve');
//             resolve()
//         } else {
//             console.log('promise reject');
//             reject()

//         }
//     }, 1000);
// })

// console.log(promise1);

// promise1
//     .then(()=>{
//         console.log("then chal rha ha");

//     })
//     .catch(()=>{
//         console.log('catch chal rha ha');

//     })

// function gymAdmission(age) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (age > 18) {
//                 resolve("admission miljayega")
//             } else {
//                 reject("admission nahi milskta")
//             }
//         }, 1000);
//     })
// }

// gymAdmission(21)
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);

// })

// async await

// async function asyncFunc() {
//     const admissionMilaYaNhi = await gymAdmission(21);
//     console.log(admissionMilaYaNhi);
// }

// asyncFunc()

function gymAdmission(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve({
          status: true,
          message: "admission milgaya",
        });
      } else {
        reject({
          status: false,
          message: "admission nahi milaa",
        });
      }
    }, 1000);
  });
}

// gymAdmission(15)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);

// })

// async function  asyncFunc() {
//     try {
//         const admission = await gymAdmission(15);
//         console.log(admission);
//     } catch (error) {
//         console.error(error);

//     }

// }
// asyncFunc()

// try{
//     alert('hello')
// }catch(err){
//     console.error(err);

// }
// console.log('hello world');

// filter revise
// filter product wala assigment
// async vs sync
// promises
// async await
// try catch
