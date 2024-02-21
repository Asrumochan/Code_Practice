const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")

const msg= document.querySelector("#msg")
const img= document.querySelector("#img")


const url1="https://cat-fact.herokuapp.com/facts";
const url2="https://dog.ceo/api/breeds/image/random"

const getCatData=async ()=>{
    console.log('getting data ........');
    let response = await fetch(url1);
    console.log(response);
    let data= await response.json();
    let count=Math.floor(Math.random()*5)
    msg.innerText=data[count].text;
}
const getDogData=async ()=>{
    console.log('getting data ........');
    let response = await fetch(url2);
    console.log(response);
    let data= await response.json();
    console.log(data.message);
    img.src=data.message;
}


btn2.addEventListener('click',getCatData)
btn1.addEventListener('click',getDogData)
