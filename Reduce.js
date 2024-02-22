console.log('Hello world from HTML')

// reduce : toi uu tosc do cua app
 //viet 1 ham tinh tong cua 1 mang
 const a = [1,2,3,4,5,6];
 function sumarr (){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += a[i];
    }
    console.log('check sum (for loops): ', sum);
 }
 
sumarr(a);

//reduce
const array1 = [1,2,3,4,5,6];

let reducer = (accumulator, currentValue) =>{
    return accumulator + currentValue;
} 

// strucs: a.reduce(callBacks, intinalValue) ==> intinalValue + x[1...n];
console.log('if intinalValue = 0: sum=', array1.reduce(reducer));
// expected output << 21 >>;
console.log('if intinalValue = 5: sum= ',array1.reduce(reducer, 5));
// expected output << 26 >> ;


