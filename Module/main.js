
import playGuitar from "./guitars.js";
import { shredding, plucking } from "./guitars.js";



const view1 = document.querySelector("#view1");
view1.style.display = "flex";
const view2 = document.querySelector("#view2");
view2.style.display ="none";

console.log(playGuitar());
console.log(shredding());
console.log(plucking());