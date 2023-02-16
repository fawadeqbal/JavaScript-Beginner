
const view = document.getElementById("view2");
const div = document.getElementsByClassName("black")
console.log(div)
const h2 =  document.querySelector('h2');

const doSomething = () => {
    alert("doing something");
}
h2.addEventListener("click", doSomething,false);