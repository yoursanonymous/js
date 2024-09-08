async function hello() {
    return 'hey guy!';//promise will be resolved with the value 'hey guy!'
    // if we dont return a value it will give us undefined value in resolved of promise
}
hello().then((data) => {
    console.log("promise resolved with:", data)
})
async function uhOh() {
    // throw "oh no!"// if we throw an error  ot wil  be rejected
    return 'LANLA LANLA'
}
uhOh().then((data) => {
    console.log("PROMISE RESOLVED WITH :", data)
})