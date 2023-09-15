const check=function (arr) {
    for (let i = 0; i< arr.length; i++) {
        res= /[0-9]/.test(arr[i]);
        if(res==true)
        return arr[i]+" has a number.";
    }
}
arr=["dasd","a3d","12b"];
var res="";
console.log(check(arr));