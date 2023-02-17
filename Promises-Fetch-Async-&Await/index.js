

const myPromise = new Promise((resolve, reject)=>{
    const error= undefined;
    if(!error){
        resolve("Yes! resolved the promise!");
    }else{
        reject("No! rejected the Promise.");
    }
});

const myNextPromise = new Promise((resolve,reject ) => {
    setTimeout(()=>{
        resolve("myNextPromise resolved!");
    },3000);
});

myNextPromise.then(value =>{
    console.log(value);
})

myPromise.then(value =>{
    console.log(value);
})
