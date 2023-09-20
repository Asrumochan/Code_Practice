const print=function (num,num1) {
    console.log(num1-num);
    if(num>=1)
        return print(num-1,num1);
    else 
    return 1;

}
var num=10;
print(num,num);

function printer(start, end,step=1) {
    console.log(start);
    if(start + step <= end) {
        return printer(start+step, end, step)
    }
    else {
        return 'Done'
    }
}

console.log(printer(0,10,2))

