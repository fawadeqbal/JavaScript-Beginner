//Fetch API
// Fetch return Promise
const users = fetch("https://jsonplaceholder.typicode.com/users");

// users is a promise
users.then(res =>{
    return res.json();
})
.then(data=>{
    data.forEach(user => {
        console.log(user);
    });
});
