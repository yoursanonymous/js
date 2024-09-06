

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



fakeRequestCallBack('books.com', function (response) {
    console.log("IT WORKED!!");
    console.log(response);
    fakeRequestCallBack('books.com/page2',function(response){
        console.log("IT WORKED AGAIN!! 2nd request");
        console.log(response)
        fakeRequestCallBack('book.com/page3',
            function(response){
                console.log("IT WORKED AGAIN!! 3rd request");
                console.log(response)
            },function(err){
                console.log("ERROR!!! 3rd REQUEST",err)
            }
        )
    },function(err){
        console.log("ERROR!!! 2nd REQUEST",err)
    })
}, function (err) {
    console.log("ERROR!!!")
    console.log(err)
})
