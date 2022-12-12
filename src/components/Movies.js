import React, { useEffect, useState } from "react";
import { movies } from "../data";

function Movies() {

  const [movieList, setMovieList] = useState()

  useEffect(()=> {
    const movieDetails = movies.map(item => {

      const movieGenres = item.genres.map(item => <li key={item}>{item}</li>)

      return (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <h4>{item.time} min.</h4>
          <h4>Genres:</h4>
          <ul>
            {movieGenres}
          </ul>
        </div>
      )
    })

    setMovieList(movieDetails)
  },[])


  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  )
}

export default Movies;
