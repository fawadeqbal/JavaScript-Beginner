
document.addEventListener("readystatechange", (event) =>{
    if(event.target.readyState==="complete"){
        console.log("ReadyState: Complete");
        initApp();
    }
})

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div")
    const h2 =  div.querySelector('h2');
    view.addEventListener(
        "click",
        (event) =>{
        event.stopPropagation();
        view.style.backgroundColor="purple";
        console.log("view")
        },
        true
    );

    div.addEventListener(
        "click",
        (event) =>{
        div.style.background="blue";
        console.log("div")
        },
        true
    );

    h2.addEventListener(
        "click",
        (event) =>{
        event.target.textContent="Clicked";
        console.log("h2")
        },
        true
    );
}



