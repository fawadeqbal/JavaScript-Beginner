//Fetch API

const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(res =>{
    return res.json();
})
.then(data=>{
    data.forEach(user => {
        console.log(user);
    });
});
