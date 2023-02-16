const myObject = {
    name: "Fawad",
    address: "Totalai",
    printInfo: () => {
        console.log(`My name is ${myObject['name']} from ${myObject['address']}`);
    }
}

myObject.printInfo();