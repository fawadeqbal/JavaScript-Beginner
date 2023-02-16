"use strict";

const makeError = () =>{
    try{
        throw new customError("This is Custom error");
    }catch(err){
        console.error(err.stack);
    }
}
makeError();

function customError(message){
    this.message=message;
    this.name = "customError:";
    this.stack =`${this.name} ${this.message}`;
}

