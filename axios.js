// axios.get('https://swapi.dev/api/people/1/')
// .then(res=>{
//     console.log("RESPONSE",res)
// })
// .catch(e=>{
//     console.log("ERROR ",e)
// })
const getStar=async(id)=>{
    try{
        const res= await axios.get(`https://swapi.dev/api/people/${id}/`)
    console.log(res.data);
}catch(e){
console.log(e)
}
};
getStar(10);
getStar(5);