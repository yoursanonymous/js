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

// const jokes=document.querySelector('#jokes');
// const button= document.querySelector('button');
// button.addEventListener('click', getDadJoke())
// const getDadJoke = async () => {
//     const config = { headers: { Accept: 'application/json' } }
    
//     const res = await axios.get('https://icanhazdadjoke.com/', config);
//     console.log(res.data.joke);
//     const newLi=document.createElement('li');
//     newLi.innerText=res.data.joke;
//     jokes.appendChild(newLi.innerText);

//     console.log(jokes);
// }
// getDadJoke()
const jokes = document.querySelector('#jokes');

// Uncomment and ensure button exists in HTML
// const button = document.querySelector('button');
// button.addEventListener('click', getDadJoke); // Use getDadJoke without parentheses to pass the function reference

const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } };

    try {
        // Fetch the joke from the API
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        console.log(res.data.joke);

        // Create a new <li> element
        const newLi = document.createElement('li');
        
        // Set the joke text as the content of the new <li>
        newLi.innerText = res.data.joke;

        // Correctly append the <li> element to the #jokes list
        jokes.appendChild(newLi);

        // Log the jokes element to see the updated list
        console.log(jokes);
    } catch (e) {
        console.error('Error fetching joke:', e);
    }
};

// Call the function to fetch and display the joke (or use button click)
getDadJoke();

// getStar(10);
// getStar(5);