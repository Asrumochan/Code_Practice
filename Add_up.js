const addup=function(num)
{
    res=res+num;
    if(num==0)
    return res;
    else
        return addup(num-1);
}

var res=0;
console.log(addup(600));
