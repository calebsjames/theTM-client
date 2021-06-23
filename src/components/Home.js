import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { PreviousShowsList } from "./asides/PreviousShowsList"
import { FutureShowsList } from "./asides/FutureShowsList"
import { ContactNoteContext } from "./contactNotes/ContactNoteProvider"
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
import { VenueModal } from "./venues/VenueModal"
import { ScheduleForm } from "./schedules/ScheduleForm"
import { ScheduleListForm } from "./schedules/ScheduleListForm"
import { ContactNoteForm } from "./contactNotes/ContactNotesForm"
import { ContactNoteListForm } from "./contactNotes/ContactNotesListForm"
import PromoterModal from "./promoters/PromoterModal"
import {ShowCheckBoxes} from "./shows/ShowCheckBoxes"
import { RelatedShowsList } from "./shows/RelatedShows"
import { DropDownNav } from "./dropdown/Dropdown"




const contentTarget = document.querySelector(".project_modal")
const eventHub = document.querySelector(".landing")

// eventHub.addEventListener("click", e => {
//   if (e.target.id === "containerRight"){
//       setShow()
//   }


export const Home = () => {
    const { getShows, shows, searchTerms, show, updateShow, addShow, setShow} = useContext(ShowContext)
    // const { getUsers, users } = useContext(UserContext)
    const { getVenues, venue, updateVenue } = useContext(VenueContext)
    const { getPromoters, promoters, promoter, updatePromoter } = useContext(PromoterContext)
    const { getHotels, hotels, updateHotel, setHotel, hotel, getHotelById } = useContext(HotelContext)
    const { getContactNotes, contactNote } = useContext(ContactNoteContext)
    const { getSchedules, schedule, addSchedule, newSchedule } = useContext(ScheduleContext)
    const [ isLoading, setIsLoading ] = useState(true);
    
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
     
    }, [showId])
   



    


      return (
        <>  
            <div id="main">
                <div className="flex">
                    <ShowFormHead />
                    <DropDownNav />
                </div>
                
                <div className="flex">
                    <div id="containerLeft" className="box">
                        <div id="detail_row" className="flex">
                            <div>
                                <div className="flex">   
                                    <VenueForm />
                                    <ShowFormA />
                                </div>
                                <div>
                                    <ShowFormB />
                                </div>
                        
                            </div>
                            <div>
                            <PromoterForm />
                            <ShowCheckBoxes />
                            </div>
                        </div>
                        <div className="flex">
                            <HotelForm />
                            <RoutingForm />
                            <RelatedShowsList />
                        </div>
                        <div className="flex se">
                            <div> <br></br>
                                <ScheduleForm /> <br></br>
                                <ScheduleListForm />
                            </div>
                            <div> <br></br>
                                <ContactNoteForm /> <br></br>
                                <ContactNoteListForm />
                            </div>
                        </div>
                    </div>
                    <div id="containerRight">
                        <PreviousShowsList />
                        <FutureShowsList />
                        <VenueModal />
                        <PromoterModal />
                    </div>
                </div>
                
            </div>
        </>
    )
}