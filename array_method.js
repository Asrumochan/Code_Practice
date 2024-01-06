let arr= ["bloomberg","microsoft",'uber','google','netflix','ibm']

//remove first element from the array 
console.log(arr.splice(0,1))

//remove uber and add ola in its place 
arr.splice(1,1,"ola")

// add amazon at the end
arr.splice(arr.length,0,"amazon")
console.log(arr)