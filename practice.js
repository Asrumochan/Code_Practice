arr=[1,2,3,4,2,3,2,1];
var c=0;
arr.forEach(element => {
    if (element==2) {
        c++;
    }
});
console.log(c);