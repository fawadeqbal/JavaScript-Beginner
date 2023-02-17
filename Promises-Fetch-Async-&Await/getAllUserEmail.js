// async await



const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    const userEmail = jsonUserData.map(user =>{
        return user.email;
    });
    return userEmail;
}

const anotherFunc = async () => {
    const emails = await getAllUserEmails();
    
    console.log(emails);
}

anotherFunc(); 

