const sevenBoom=function (arr) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index].toString().includes('7');
        if (element==='true') {
            return "boom";
        }
}
return "there is no 7 in the array";
}
arr=[12,23,34,45,56];
console.log(sevenBoom(arr));
