const fetch = require("node-fetch");

const $movieList = document.querySelector(".movie-list")
const newDiv = document.createElement("div");
const newImg = document.createElement("img");
const newH3 = document.createElement("h3");
const newP = document.createElement("p");

// const $movieCard = document.querySelector(".movie-card")
// const $image = document.querySelector(".image")
// const $movieTitle = document.querySelector(".movie-title")
// const $summary = document.querySelector(".summary")
// const $rating = document.querySelector(".rating")

let show = true;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGVkZTIyNzIwZmRjYTFjMTgzZWU1OTIwOWMzNGZmYyIsInN1YiI6IjY0NzgzNDA3MGUyOWEyMDBmOTgwM2M3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HQEkE95PvJxlsB7tV6CqCGQZ1G146f-amX20DO6NSeg'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    let results = data["results"]
    results.forEach((a) => {
      let id = a["id"] 
      let title = a["title"]
      let overview = a["overview"]
      let poster_path = a["poster_path"]   
      let vote_average = a["vote_average"]
      let imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`

      if(show) {
        let card = $movieList.appendChild(newDiv)
        document.querySelector('div').id = '#id'
        const $ = document.querySelector("#id")
        let img = card.appendChild(newImg)
        img.scr = imageUrl
        // let movieTitle = card.appendChild(newH3)
        // movieTitle.textContent = '#title'
        // let summary = card.appendChild(newP)
        // summary.textContent = '#overview'
        // let rating = card.appendChild(newP)
        // rating.textContent = '#vote_average'

        // $movieCard.setAttribute(id, id)
        // $image.setAttribute(src, imageUrl)
            }
    })
  })