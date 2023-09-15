const check=function (arr) {
    for (let i = 0; i< arr.length; i++) {
        res= /[0-9]/.test(arr[i]);
        if(res==true)
        return arr[i]+" has a number";
    }
}
arr=["das2d","a3d","12b"];
var res="";
console.log(check(arr));