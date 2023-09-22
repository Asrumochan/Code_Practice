const print=function (num,num1) {
    console.log(num1-num);
    if(num>=1)
        return print(num-1,num1);
}
var num=10;
print(num,num);



