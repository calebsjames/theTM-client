import React, { useContext, useEffect } from "react"
import { UserContext } from "../auth/AuthProvider"
import { ShowContext } from "../shows/ShowProvider"
import { PreviousShows } from "./PreviousShows"
// import PerfectScrollbar from 'perfect-scrollbar'


export const FutureShowsList = () => {
    
    // This state changes when `getShows()` is invoked below
    const { shows, getShows } = useContext(ShowContext)
    // const { user } = useContext(UserContext)

    useEffect(() => {
        getShows()
  }, [])


    // const ps = new PerfectScrollbar('#scroll')
    const currentdate = new Date().toISOString().slice(0, 10)
    const showsFiltered = shows.filter(show => show.date >= currentdate) 
    
    const showsSorted = showsFiltered?.sort(
        
    (currentShow, nextShow) =>
        Date.parse(currentShow.date) - Date.parse(nextShow.date)
    )

  return (
    <>         
        <article className="futureShows">
            <h2>Future Shows</h2>
            <div className="scrollFuture">
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