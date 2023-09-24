array=[1,2,3,4,5];
obj={
    sum:0,
    product:1
}
//----------Arrow function---------
const sum=(a,b)=>a+b;
console.log(sum(1,3));

//-------------- Filter -----------------
arr=array.filter((val,index,array)=>{
    return val>2 ;
});
console.log(arr);

// -------------------map function ---------------

//Adding 10 to all elements of the array
arr = array.map((val)=>
{
    return val+10;
});

console.log(arr);

//returning elements when condition will meet
arr =array.map((val)=>{
    if(val>2)
        return val;
});

console.log(arr);

//-------- Reduce function -------------
let res=0;
array.reduce((acc,val)=>{
    acc.sum +=val;
    acc.product *=val;
    return acc;
},obj);

console.log(obj);