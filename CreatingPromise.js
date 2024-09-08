
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand= Math.random();
        setTimeout(() => {
            if(rand<0.7){
                resolve('YOUR FAKE DATA IS HERE');
            }
            reject('CONNECTION TIMEOUT');
        }, 1000)
    })
}

async function makeTwoRequest(){
    try{
        let data1= await  fakeRequest('/page2');
        let data2= await  fakeRequest('/page2');
        console.log(data1)
        console.log(data2)
        console.log("HELOO!!!!")
    }
    catch(e){
        console.log("caught an error", "and the error is :",e);
    }
}
makeTwoRequest()
// try{
//     sadgg.log('asags')
// }catch(e){
//     console.log("hhhhhhhhhhhhh",e)
// }

// fakeRequest('/dogs/1')
//     .then((data)=>{
//         console.log("DONE IW")
//         console.log('data is: ', data)
//     })
//     .catch((err)=>{
//         console.log('oh no!', err);
//     })