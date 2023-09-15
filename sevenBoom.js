const sevenBoom=function (arr) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index].toString().includes('7');
        if (element==true && index==0) {
            return "boom! 7 found in "+Number(index+1)+"st element,"+ "that is " + arr[index];
        }
        if (element==true && (index==1)) {
            return "boom! 7 found in "+Number(index+1)+"nd element,"+ "that is " + arr[index];
        }
        if (element==true && (index==2)) {
            return "boom! 7 found in "+Number(index+1)+"rd element,"+ "that is " + arr[index];
        }
        if (element==true) {
            return "boom! 7 found in "+Number(index+1)+"th element,"+ "that is " + arr[index];
        }
    }
    return "there is no 7 in the array";
}
arr=[2,3,14,45,79];
console.log(sevenBoom(arr));
