<<<<<<< HEAD

//fetch API
=======
//Fetch API
>>>>>>> 35f0932d13c11765537ff8ff7b982a95a2c99f91

const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(res =>{
    return res.json();
})
.then(data=>{
    data.forEach(user => {
        console.log(user);
    });
});
