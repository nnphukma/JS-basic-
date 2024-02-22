console.log('Hello world from HTML');

//let arr[1,2,3,4,5,6,7,8,9,10];
let arr = [
    {name:'phu', age: '25' },
    {name:'abc', age: '29' },
    {name:'eric', age: '25' },
    {name:'vcl', age: '24' },
    {name:'uidcm', age: '35' },

]
//filter, find
let filter = arr.filter((item, index) => {
    return item && item.age === '55';
});

let find = arr.find((item, index) => {
    return item && item.age === '55';
})

console.log('check filter: ', filter, 'check find:', find);