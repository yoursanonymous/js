
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand= Math.random();
        setTimeout(() => {
            if(rand<0.7){
                resolve('YOUR FAKE DATA IS HERE');
            }
            reject('REQUEST ERROR');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data)=>{
        console.log("DONE IW")
        console.log('data is: ', data)
    })
    .catch((err)=>{
        console.log('oh no!', err);
    })