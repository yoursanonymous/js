// const form= document.querySelector('#searchForm')
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     // const user=form.elements.query.value;
//     console.log(form.elements.query.value);
//     axios.get('https://api.tvmaze.com/search/shows?q=girls');
// })

const form = document.querySelector('#searchForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const userQuery = form.elements.query.value;
    console.log(userQuery);
    axios.get(`https://api.tvmaze.com/search/shows?q=${userQuery}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
