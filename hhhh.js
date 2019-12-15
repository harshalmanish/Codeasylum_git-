const form=document.querySelector("#myform");
const row=document.querySelector(".row")
const API_key="cc55e744";
form.addEventListener("submit",e=>
{
    e.preventDefault();
    const input=document.querySelector("#movieInput");
     fetchMovies(input.value);


});
const fetchMovies = async (text) => {
    const url=`http://www.omdbapi.com/?apikey=${API_key}&s=${text}`;
    const moviesData=await fetch(url);
    const movies=await moviesData.json();
    console.log(movies);
    let textDiv="";
     movies.Search.forEach(movie =>{
          textDiv+=`<div class="col-md-3"> 
                    <div class="container mt-3 jumbotron bg-dark">
                        <img src=${movie.Poster} class="poster" alt="movieName">
                        <p class="text-white"> ${movie.Title}</p>
                        <button class="btn btn-primary">See Details</button>
                    </div>
                    </div>`
     });
     row.innerHTML=textDiv;

};
https://api.railwayapi.com/v2/rescheduled/date/<dd-mm-yyyy>/apikey/<apikey>/




<div style="background-color:grey;padding:5px;margin:5px 0;">
<h1>${stn.station.name}</h1>
<div>
<h4>Scheduled arrival: ${stn.scharr}</h4>
<h4>Scheduled departure: ${stn.schdep}</h4>
</div>
</div>`;