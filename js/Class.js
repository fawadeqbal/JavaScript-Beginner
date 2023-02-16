// Javascript Classes

//Parent
class Pizza {
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor( pizzaSize){
        this.#size = pizzaSize;
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}

// inhertance

class SpecialtyPizza extends Pizza{
    constructor(pizzaSize){
        super(pizzaSize);
        this.type = "The Works";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`)
    }
}

const myObj = new SpecialtyPizza("Medium");
myObj.slice();

// Private fields Factory function
function pizzafactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;

    return{
        Bake: ()=>{
            console.log(`Baking a ${size} ${crust} crust pizza.`)
        }
    }
}

const myPizza = pizzafactory("small");
myPizza.Bake();
