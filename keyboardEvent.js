const input = document.querySelector('input');
input.addEventListener('keyup', function (e) {
    console.log(e.code);
    console.log(e.key);
})

const input2 = document.querySelector('#b');
input2.addEventListener('keyup', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP");
            break;
        case 'ArrowDown':
            console.log("DDWN!!!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!!!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!!!");
            break; 
        default:
            console.log("abe apna kaam krna")
    }
})