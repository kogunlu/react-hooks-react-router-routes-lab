import React, { useEffect, useState } from "react";
import { actors } from "../data";

function Actors() {

  const [actorList, setActorList] = useState()


  useEffect(() => {
    const actorDetails = actors.map(item => {

      const actedMovies = item.movies.map(item => <li key={item}>{item}</li>)

      return (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <h4>Movies:</h4>
          <ul>
            {actedMovies}
          </ul>
        </div>
      )
    })

    setActorList(actorDetails)
  },[])


  return (
    <>
      <h1>Actors Page</h1>
      {actorList}
    </>
  )
}

export default Actors;
