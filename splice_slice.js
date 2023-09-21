arr=['a','b','c','d','e'];
// getting Element from the array - Array.slice(start,end);
console.log(arr.slice(1,3));
// getting the last Element from the array - Array.slice(-1);
console.log(arr.slice(-1));

// insert Element to array using splice - Array.splice(index,count for delete,element);
arr.splice(2,0,"f");
console.log(arr);
// delete Element from array using splice - Array.splice(index,count for delete)
arr.splice(2,1);
console.log(arr);
// replace Element in an array using splice - Array.splice(index,count for delete, element);
arr.splice(2,1,'v');
console.log(arr);
