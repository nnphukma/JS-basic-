console.log('Hello world: Arrow Function')

// regular function

function RGLFun(a, b){
    return a + b;
};

// Arrow function ( => )

let ArrFun = ( a, b) => {
    return a + b;
}

console.log('check out >>>', ' a + b =', ArrFun(6,5));
console.log('check out >>>', ' a + b =', RGLFun(6,5));
