// if we do this exactly we can have the page chnages to the url where it is submitted
const s=document.querySelector('#shelter');
s.addEventListener("submit", function(e){
    console.log("SUBMITTED!!!!");
    e.preventDefault();//if we use this method it will be saved and not change the url
    console.log("SUBMITTED!!!!");
})