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
//iterating through the object
for (const key in obj) {
    console.log(key +':'+obj[key]);
}


