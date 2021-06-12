import React, { useContext, useEffect } from "react"
import { ShowContext } from "../shows/ShowProvider"
import { PreviousShows } from "./PreviousShows"


export const ShowAsideList = () => {
    
    // This state changes when `getShows()` is invoked below
    const { shows, getShows } = useContext(ShowContext)

    useEffect(() => {
        getShows()
  }, [])

//   const userShows = shows.filter(insp => parseInt(insp.userId) === parseInt(localStorage.getItem("tm_token")))

  const showsSorted = shows.sort(
    (currentShow, nextShow) =>
        Date.parse(currentShow.date) - Date.parse(nextShow.date)
)

  return (
    <>         
        <article className="containerRight">
            <h2>Previous Shows</h2>
            {
                showsSorted.map(showObject => {
                    return <PreviousShows key={showObject.id} showInstance={showObject} 
                    />
                })
            }
        </article>
    </>
)
}

