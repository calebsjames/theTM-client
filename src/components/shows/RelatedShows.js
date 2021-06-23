import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../auth/AuthProvider"
import { ShowContext } from "../shows/ShowProvider"
import { AllRelatedShows } from "../shows/RelatedShowsList"


export const RelatedShowsList = () => {
    
    // This state changes when `getShows()` is invoked below
    const { shows, getShows, setShow, show, getShowById } = useContext(ShowContext)
    const showId = useParams()

    useEffect(() => {
        
            getShowById(showId.showId)
            //then setShow to that found Show
            .then(Show => {
                setShow(Show)                
                // setIsLoading(false)
            })
        }
    , [showId])


    // const ps = new PerfectScrollbar('#scroll')
    const currentdate = new Date().toISOString().slice(0, 10)
    const notNullVenues = shows.filter(s => s.venue?.id != null)
    
    const showsFiltered = notNullVenues.filter(s => s.venue?.id === show?.venue?.id) 
    
    
    const showsSorted = showsFiltered?.sort(
        
    (currentShow, nextShow) =>
    Date.parse(nextShow.date) - Date.parse(currentShow.date)
    )

  return (
    <>         
            <article className="relatedShows">
        <h2>Related Shows</h2>
            <div className="scrollRelated">
            {
                showsSorted?.map(showObject => {
                    return <AllRelatedShows key={showObject.id} showInstance={showObject} 
                    />
                })
            }
            </div>
        </article>
    </>
)
}