document.addEventListener("DOMContentLoaded", function() {
  console.log("Movie script ready")
  function searchMovies(title){
    console.log(title);
  }
  var movies = [
    {
      title: "RAD",
      director: "Steven Spielberg",
      rating: 12,
      image: ""
    },
    {
      title: "Legally Blonde",
      director: "Francis Ford Coppola",
      rating: 12,
      image: ""
    },
    {
      title: "Pokemon #1",
      director: "Sophia Coppola",
      rating: 12,
      image: ""
    }

  ];

  for (var i = 0; i < movies.length; i++){


    var listItem = document.createElement("li")
    listItem.innerText = movies[i].title

    console.log(listItem)

    var movieList = document.getElementById("movie-list")

    movieList.appendChild(listItem)

  }
  //search stuff
  //get search element
    var searchInput = document.getElementById("movie-search-input")
    var searchButton = document.getElementById("movie-search-button")

    searchInput.addEventListener("keyup",function(event){
      if (event.keycode === 13) {
        console.log("Searching")
        searchMovies(event.target.value)
      }

    })

    searchButton.addEventListener(" ",function(){
      searchMovies(searchInput.value)

    })

})
