const input = document.querySelector('input')
const btn = document.querySelector('button')
const list = document.getElementById('list')

//event click
btn.addEventListener('click' , function(){
    let searchedText = input.value;
    let data = fetchData(searchedText)
})

//api calling
function fetchData(searchedText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchedText}`)
    .then((resp)=>{ 
        console.log(resp.data)
        manipulateData(resp.data)
    })
    .catch((err)=>{ console.log(err) })
}

// dom creation
function manipulateData(movies){
    //remove previous data
    while(list.firstChild){
        list.firstChild.remove()
    }
    //alooping on new data
    for(let movie of movies){
        let figure = document.createElement('figure')
        figure.innerHTML = `
            <img src=${movie.show.image.medium} alt="photo"/>
            <br>
            <h2>Name: ${movie.show.name} </h2>
            <h2>Genre: ${movie.show.genres[0]} </h2>
            <h2>Rating: ${movie.show.rating.average} </h2>
        `
        list.appendChild(figure)
    }
}



