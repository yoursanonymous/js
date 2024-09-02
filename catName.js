const s = document.querySelector('#shelter');
const input = document.querySelector('#name');
const list=document.querySelector('#cats') ;
s.addEventListener("submit", function (e) {
    e.preventDefault();
    const name=input.value;
    const newLI=document.createElement("li");
    newLI.innerText=name;
    list.append(newLI);
    input.value="";
});