
// import playGuitar from "./guitars.js";
// import { shredding as shred, plucking as fingerpicking } from "./guitars.js";

// Import all

import * as Guitars from "./guitars.js";
import User from "./user.js";


const view1 = document.querySelector("#view1");
view1.style.display = "flex";
const view2 = document.querySelector("#view2");
view2.style.display ="none";

const me = new User("email@yahoo.com","Fawad Iqbal");

console.log(me);
console.log(me.greeting());

console.log(Guitars.default());
console.log(Guitars.plucking());
console.log(Guitars.shredding());