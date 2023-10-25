async function getData(){
    try{
   const res=await fetch('https://jsonplaceholder.typicode.com/users');
   const result=await res.json();
   result.map((val)=>{
    console.log(val.name);
   })
    }catch(err){
        console.log(err)
    }
}

getData();
