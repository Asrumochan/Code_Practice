const bit_and=function(n1,n2)
{
    return n1&n2;
}
const bit_or=function(n1,n2)
{
    return n1|n2;
}
const bit_xor=function(n1,n2)
{
    return n1^n2;
}
var res=bit_and(6,23);
var res_and=res.toString(2);
var res=bit_or(6,23);
var res_or=res.toString(2);
var res=bit_xor(6,23);
var res_xor=res.toString(2);
console.log(res_and,res_or,res_xor);