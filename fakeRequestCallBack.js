

const fakeRequestCallBack = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('connection Timeout')
        }
        else {
            success(`here is your fake data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('connection Timeout')
            }
            else {
                resolve(`here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestCallBack('books.com', function (response) {
//     console.log("IT WORKED!!");
//     console.log(response);
//     fakeRequestCallBack('books.com/page2',function(response){
//         console.log("IT WORKED AGAIN!! 2nd request");
//         console.log(response)
//         fakeRequestCallBack('book.com/page3',
//             function(response){
//                 console.log("IT WORKED AGAIN!! 3rd request");
//                 console.log(response)
//             },function(err){
//                 console.log("ERROR!!! 3rd REQUEST",err)
//             }
//         )
//     },function(err){
//         console.log("ERROR!!! 2nd REQUEST",err)
//     })
// }, function (err) {
//     console.log("ERROR!!!")
//     console.log(err)
// })

// const request= fakeRequestPromise('yelp.com/api/coffee/page1');
// request
//     .then(()=>{
//     console.log("IT WORKED!!!!!!!")
//     fakeRequestPromise('yelp.com/api/coffee/page2')
//         .then(()=>{
//             console.log("IT WORKED!!!!!!!(2nd)");
//             fakeRequestPromise('yelp.com/api/coffee/page3')
//                 .then(()=>{
//                 console.log("IT WORKED!!!!!!! 3rd")                
//                 })
//                 .catch(()=>{
//                     console.log("OH NOOOOO, ERROR 3rd")
//                 })
//         })
//         .catch(()=>{
//             console.log("OH NOOOOO, ERROR 2ND")
//         })
//     })
//     .catch(()=>{
//     console.log("OH NOOOOO, ERROR")
//     })

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED !!1");
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page2');
    })
    .then((data) => {
        console.log("IT WORKED !!2");
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data)=>{
        console.log("IT WORKED !!! 3")
        console.log(data)
    })
    .catch((err)=>{
        console.log("OH NO, the request failed ")
        console.log(err)
    })


