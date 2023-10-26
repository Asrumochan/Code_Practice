async function getData(){
    try{
   const res=await fetch('https://jsonplaceholder.typicode.com/users');
   const result=await res.json();
   result.map((val)=>{
    console.log(val.id);
   })
    }catch(err){
        console.log("Error:"+err)
    }
}

getData();
