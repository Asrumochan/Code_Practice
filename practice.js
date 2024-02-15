function calc(a,b,sum){
    sum(a,b)
}
calc(1,4,(a,b)=>{
    console.log(a+b)
})