// axios.get('https://swapi.dev/api/people/1/')
// .then(res=>{
//     console.log("RESPONSE",res)
// })
// .catch(e=>{
//     console.log("ERROR ",e)
// })
const getStar = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(res.data);
    } catch (e) {
        console.log(e)
    }
};

const jokes = document.querySelector('#jokes');
const buttn = document.querySelector('button');
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    }
    catch (e) {
        return "no joke are avaialable";
    }
}
buttn.addEventListener('click', addNewJoke)


// getStar(10);
// getStar(5);