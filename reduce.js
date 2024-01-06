const input =require('prompt-sync')();
let num =parseInt(input('Enter the num:'));
let arr =[]
for (i=1; i<=num; i++){
    arr.push(i);
}
console.log(arr);
let obj ={sum:0,
    product:1}

    arr.reduce((acc,val)=>{
        acc.sum+=val;
        acc.product*=val;
        return acc;
    },obj)
    console.log(`The sum is ${obj.sum}`);
    console.log(`The product is ${obj.product}`);