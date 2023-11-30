// Global Scope
const globalScope = "I am a Global Scope";

console.log (globalScope);


// Block Scope

{
    const blockScope = "I am a block scope";

     function a(){
        console.log(blockScope);
     }

     function b(){
        console.log(blockScope);
     }


}

// Local Scope

function a(){
    const localScope = "I am local Scope";
    console.log(localScope);
}


// Lexical Scope

function outer(){
    const lexiScope = "I am lexical Scope";
    function inner(){
        console.log (lexiScope);
    }
    inner();
}

