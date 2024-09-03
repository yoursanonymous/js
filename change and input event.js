const input = document.querySelector('input');
const input2=document.querySelector('#change');
const input3=document.querySelector('#h');
const h=document.querySelector('h2');
input.addEventListener('change', function (e) {
    console.log("just got the input ")
});
input2.addEventListener('input', function(e){
    console.log("INPUT EVENT!!")
})
input3.addEventListener('input',function(e){
    h.innerText=input3.value;
})