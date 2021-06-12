import React, { useContext, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { ShowAsideList } from "./asides/PreviousShowsList"
import { ContactNoteContext } from "./contactNotes/ContactProvider"
import { HotelForm } from "./hotels/HotelForm"
import { HotelContext } from "./hotels/HotelProvider"
import { PromoterForm } from "./promoters/PromoterForm"
import { PromoterContext } from "./promoters/PromoterProvider"
import { ScheduleContext } from "./schedules/ScheduleProvider"
import { RoutingForm } from "./shows/RoutingForm"
import { ShowFormA } from "./shows/ShowFormA"
import { ShowFormB } from "./shows/ShowFormB"
import { ShowFormHead } from "./shows/ShowFormHead"
import { ShowContext } from "./shows/ShowProvider"
import { VenueForm } from "./venues/VenueForm"
import { VenueContext } from "./venues/VenueProvider"



export const Home = () => {
    const { getShows, shows, searchTerms } = useContext(ShowContext)
    // const { getUsers, users } = useContext(UserContext)
    const { getVenues, venues } = useContext(VenueContext)
    const { getPromoters, promoters } = useContext(PromoterContext)
    const { getHotels, hotels } = useContext(HotelContext)
    const { getContactNotes, contactNote } = useContext(ContactNoteContext)
    const { getSchedules, schedule } = useContext(ScheduleContext)
    const history = useHistory()
    const showId = useParams()
    
    

  


    

    // Initialization effect hook
    useEffect(()=>{
      getShows()
      getVenues()
      getPromoters()
      getHotels()
      getContactNotes()
      getSchedules()
     
    }, [])
   

    // //Get data related to showId and load it into the form
    // useEffect(() => {
    //     getShows().then(() => {        
    //         getShowById(showId)
    //         .then(Show => {
    //             setShow(Show)
    //             setIsLoading(false)
    //         })
        
    //     })
    // }, [])


      return (
        <>
            <ShowFormHead />
            <div id="detail_row" className="flex">
                <VenueForm />
                <ShowFormA />
                <PromoterForm />
            </div>
            <ShowFormB />
            <div className="flex">
                <HotelForm />
                <RoutingForm />
            </div>
            <ShowAsideList />
        </>
    )
}