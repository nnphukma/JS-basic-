console.log('Hello world from HTML');
//map
//so sanh for va map
let arr = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i]*arr[i];
//    }

let mapArr = arr.map((item, index) => {
    item = item*item;
    return item;

})


console.log('check value of arr:', arr);
console.log('check value of arr:', mapArr);
