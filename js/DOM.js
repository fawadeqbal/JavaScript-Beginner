const view1 = document.getElementById("view1");
//console.log(view1.parentElement.parentElement.parentElement);

const view2 = document.querySelector("#view2");
// console.log(view2);
view1.style.display="flex";
view2.style.display="flex";
const views = document.getElementsByClassName("view");
// console.log(views);
const sameViews = document.querySelectorAll(".view");
// console.log(sameViews);
const divs =document.querySelector("div");
const evenDiv = document.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDiv)
// console.log(divs.parentElement.children)
for(let i=0;i<evenDiv.length;i++){
    evenDiv[i].style.background="darkblue";
}

const navText= document.querySelector("nav h1");
console.log(navText);
const navBar= document.querySelector("nav");
console.log(navBar);
navText.textContent="Hello World!"
navBar.innerHTML=`<h1>Hello!</h1> <p>This should align right.</p>`;

//Navigation through DOM Tree
console.log(evenDiv[0]);
console.log(evenDiv[0].parentElement);
console.log(evenDiv[0].parentElement.children);
console.log(evenDiv[0].parentElement.childNodes);
console.log(evenDiv[0].parentElement.hasChildNodes());
console.log(evenDiv[0].parentElement.lastChild);
console.log(evenDiv[0].parentElement.lastElementChild);
console.log(evenDiv[0].parentElement.firstChild);
console.log(evenDiv[0].parentElement.firstElementChild);
console.log(evenDiv[0].nextSibling);
console.log(evenDiv[0].nextElementSibling.nextElementSibling);
console.log(evenDiv[0].previousSibling);
console.log(evenDiv[0].previousElementSibling);


// view1.style.display='none';
// view2.style.flexDirection='row';
// view2.style.flexWrap='wrap';
// view2.style.margin='10px';

// //remove all nodes view2
// while(view2.lastChild){
//     view2.lastChild.remove();
// }

// // Create Element and append to parent
// const createDivs = (parent,iter)=>{
//     const newDiv = document.createElement("div");
//     newDiv.textContent = iter;
//     newDiv.style.background = "#FFF";
//     newDiv.style.width = "100px";
//     newDiv.style.height = "100px";
//     newDiv.style.margin = "10px";
//     newDiv.style.display = "flex";
//     newDiv.style.justifyContent = "center";
//     newDiv.style.alignItems = "center";
//     parent.append(newDiv);
// }
// for(let i=1;i<13;i++){
//     createDivs(view2,i);
// }
// console.log(view2)













