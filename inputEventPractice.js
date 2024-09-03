const h1 = document.querySelector('h1');
const input = document.querySelector('#username');
input.addEventListener('input', function (e) {
    if (input.value == '') {
        h1.innerText = "Enter Your Username";
    }
    else {
        const name = input.value;
        h1.innerText = `Welcome ${name}`;
    }
})