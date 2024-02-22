console.log('Hello world: Callbacks, setTimeout, setInterval')

// arrow function 

let sum = (a, b, callback) => {
    let tong = a + b;
    // setTimeout(()=> {
    //     callback(tong);
    // }, 5000) //milisecond;
   
    let  i =0;
    let timer = setInterval(() => {
        console.log('i>> ',i);

        callback(tong);
        
        i++;
        if(i === 5) {
            clearInterval(timer)
        }
    },500);

    
} 
    
let printSum = (Message) => {
    console.log('check out >>> 6 + 9 =', Message)
};

sum (6, 9, printSum);

