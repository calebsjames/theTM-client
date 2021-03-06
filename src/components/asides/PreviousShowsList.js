import React, { useContext, useEffect } from "react"
import { ShowContext } from "../shows/ShowProvider"
import { PreviousShows } from "./PreviousShows"
// import PerfectScrollbar from 'perfect-scrollbar'


export const PreviousShowsList = () => {
    
    // This state changes when `getShows()` is invoked below
    const { shows, getShows } = useContext(ShowContext)

    useEffect(() => {
        getShows()
  }, [])

//   const userShows = shows.filter(insp => parseInt(insp.userId) === parseInt(localStorage.getItem("tm_token")))
    const scrollDiv = document.getElementById("scroll");
    // scrollDiv.scrollTop = scrollDiv.scrollHeight;
    
    const currentdate = new Date().toISOString().slice(0, 10)
    const showsFiltered = shows.filter(show => show.date < currentdate)
    // const ps = new PerfectScrollbar('#scroll')
    const showsSorted = showsFiltered?.sort(
        
    (currentShow, nextShow) =>
    Date.parse(nextShow.date) - Date.parse(currentShow.date)
    )

  return (
    <>         
        <article className="previousShows">
            <h2>Previous Shows</h2>
            <div className="scrollPrevious">

            {
                showsSorted?.map(showObject => {
                    return <PreviousShows key={showObject.id} showInstance={showObject} 
                    />
                })
            }
            </div>
        </article>
    </>
)
}

