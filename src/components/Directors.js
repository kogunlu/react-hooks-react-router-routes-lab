import React, {useState, useEffect} from "react";
import { directors } from "../data";

function Directors() {

  const [directorList, setDirectorList] = useState()

  useEffect(() => {
    const directorsDetails = directors.map(item => {

      const relatedMovies = item.movies.map(item => <li key={item}>{item}</li>)

      return (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <h4>Movies:</h4>
          <ul>
            {relatedMovies}
          </ul>
        </div>
      )
    })

    setDirectorList(directorsDetails)
  },[])


  return (
    <>
      <h1>Directors Page</h1>
      {directorList}
    </>
  )
}

export default Directors;
