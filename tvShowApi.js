const form= document.querySelector('#searchForm')
form.addEventListener('submit',function(e){
    e.preventDefault();
    // const user=form.elements.query.value;
    console.log(form.elements.query.value);
    axios.get('https://api.tvmaze.com/search/shows?q=girls');
})