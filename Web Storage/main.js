const view1 = document.querySelector("#view1");
view1.style.display = "flex";
const view2 = document.querySelector("#view2");
view2.style.display ="flex";
const view3 = document.querySelector("#view3");
view3.style.display = "flex";
const myArray = ["eat", "sleep", "code"];


const myObject = {
    name: "Fawad",
    hobbies: ["eat", "sleep", "code"],
    logName: () => {
        console.log(this.name);
    }
};



sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log((mySessionData));

localStorage.setItem("myLocalStore", JSON.stringify(myObject));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log((myLocalData));