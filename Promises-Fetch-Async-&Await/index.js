

const myPromise = new Promise((resolve, reject)=>{
    const error= false;
    if(!error){
        resolve("Yes! resolved the promise!");
    }else{
        reject("No! rejected the Promise.");
    }
});

console.log(myPromise);

myPromise.then(value =>{
    return value+" my Statement";
})
.then(newValue =>{
    console.log(newValue);
})
.catch( err =>{
    console.error(err);
})