// setTimeout(()=>{
//     document.body.style.backgroundColor='red';
//     setTimeout(()=>{
//         document.body.style.backgroundColor='orange';
//         setTimeout(()=>{
//             document.body.style.backgroundColor='yellow';
//             setTimeout(()=>{
//                 document.body.style.backgroundColor='green';
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor='blue';

//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)
const delay = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}
delay('red', 1000, () => {
    delay('orange', 1000, () => {
        delay('yellow', 1000, () => {
            delay('green', 1000, () => {
                delay('blue', 1000, () => {

                })
            })
        })
    })
})