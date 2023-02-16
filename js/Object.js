
// Object key value pair
const band = {
    vocal: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham",
    obj: {
        myvar:12
    }
};


const truck = Object.create(band);
truck.engine="High";

// Inheritance
console.log(truck)

console.log(Object.keys(band));
console.log(Object.values(band));
console.log(band['bass']);

// job give the key
for (let job in band)
console.log(`On ${job}, it's ${band[job]}`);


// destructuring
const {guitar: myVar} = band;
const {vocal} = band;
console.log(typeof vocal)

function sings({vocal}){return `${vocal} sings!`}
 console.log(sings(band))