//Promises

// const myPromise = new Promise((resolve, reject)=>{
//     const error= undefined;
//     if(!error){
//         resolve("Yes! resolved the promise!");
//     }else{
//         reject("No! rejected the Promise.");
//     }
// });

// const myNextPromise = new Promise((resolve,reject ) => {
//     setTimeout(()=>{
//         resolve("myNextPromise resolved!");
//     },3000);
// });

// myNextPromise.then(value =>{
//     console.log(value);
// });

// myPromise.then(value =>{
//     console.log(value);
// });

//fetch API

const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(res =>{
    return res.json();
})
.then(data=>{
    data.forEach(user => {
        console.log(user);
    });
});
