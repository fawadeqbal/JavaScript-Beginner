
// JSON: Javascript Object Notation

const myObj = {
    name: "Fawad",
    hobbies: ["eat","sleep","code"],
    hello: () =>{
        console.log("Hello");
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj)

//Object to JSON String
const sendJSON = JSON.stringify(myObj);

console.log(sendJSON);
console.log(typeof sendJSON)

// Recive JSON From somewhere
const recievObj= JSON.parse(sendJSON);
// JSON String to Object
console.log(recievObj)
console.log(typeof recievObj)