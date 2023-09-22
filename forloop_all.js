array=[1,2,3,4,5];
obj={
    name:'asru',
    city:'bam',
    sum:0,
    product:1
}

// --------------for of loop------------
// Iterating through the array 
for (const i of array) {
    console.log(i);
}

// --------------for in loop------------
//iterating through the object and array
for (const key in obj) {
    console.log(key +':'+obj[key]);
}

for (const key in array) {
    console.log(key +' :  '+array[key]);
}


//---------------------for each loop --------------------
// Summation of elements of an array using for each loop
let res=0;
array.forEach(function(val,index,arr){
    res+=val;
});
console.log(res);