import React, { useContext, useEffect } from "react"
import { ShowContext } from "../shows/ShowProvider"
import { PreviousShows } from "./PreviousShows"


export const FutureShowsList = () => {
    
    // This state changes when `getShows()` is invoked below
    const { shows, getShows } = useContext(ShowContext)

    useEffect(() => {
        getShows()
  }, [])

//   const userShows = shows.filter(insp => parseInt(insp.userId) === parseInt(localStorage.getItem("tm_token")))

  const showsSorted = shows?.sort(
    (currentShow, nextShow) =>
        Date.parse(nextShow.date) - Date.parse(currentShow.date)
)

  return (
    <>
        <article className="upcomingShows"> 
            <h2>Upcoming Shows</h2>
            {
                showsSorted?.map(showObject => {
                    return <PreviousShows key={showObject.id} showInstance={showObject} 
                    />
                })
            }
        </article>        
    </>
)
}

