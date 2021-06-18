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
   


    const handleNewShow = () => {
        const newShow = {
            
            advanced: false,
            ages: "",
            artist: "",
            billing: "",
            bus_call: "00:00",
            comments: "",
            contracted: false,
            contract_signed: false,
            curfew: "00:00",
            date: "1950-01-01",
            date_on_artist_site: false,
            date_on_calendar: false,
            date_on_socials: false,
            date_on_venue_site: false,
            deposit: 0,
            deposit_paid: false,
            door_price: 0,
            door_time: "00:00",
            drive_time: "",
            gross_income: 0,
            guarantee: 0,
            guest_list: "",
            guest_list_sent: false,
            load_in: "00:00",
            miles_to_drive: 0,
            public_private: "",
            promo_materials_sent: false,
            routing: "",
            routing_notes: "",
            runner: false,     
            show_length: "",
            show_time: "00:00",
            sound_check: "00:00",
            support: "",
            status: "",
            terms: "",
            ticket_sales: 0,
            weather: "",
            hotel: null,
            promoter: null,
            venue: null
        };
        addShow(newShow)
        .then(showid => {
            history.push(`/show/${showid}`)

        }) 
    }

    

    

    const handleClickSaveForm = (event) => {

        event.preventDefault()
        updateShow(show)
        if (show.venue?.id) {   
            updateVenue(venue)
        } 

        if (show.promoter?.id) {   
            updatePromoter(promoter)
        } 

        if (show?.hotel?.id) {
            updateHotel(hotel)
        } 
        
    }


    const handleLogout = (event) => {
        localStorage.removeItem("tm_token")
        history.push({ pathname: "/" })
        
    }


      return (
        <>  
            <div id="main">
                <ShowFormHead />
                <div className="flex">
                    <div id="containerLeft">
                        <div id="detail_row" className="flex">
                            <div className="flex">   
                                <VenueForm />
                                <ShowFormA />
                            </div>
                            <div>
                            <ShowFormB />
                            </div>
                            <div>
                            <PromoterForm />
                            <ShowCheckBoxes />
                            </div>
                        </div>
                        <div className="flex">
                            <HotelForm />
                            <RoutingForm />
                        </div>
                        <div className="flex">
                            <div> 
                                <ScheduleForm /> <br></br>
                                <ScheduleListForm />
                            </div>
                            <div> 
                                <ContactNoteForm /> <br></br>
                                <ContactNoteListForm
 />
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
                
                <button className="btn btn-primary"
                // disabled={isLoading}
                onClick={handleClickSaveForm}>
                Save</button>
                
                
                <button className="btn btn-primary"
                // disabled={isLoading}
                onClick={handleNewShow}>
                New Show</button>

                <button className="btn btn-primary"
                // disabled={isLoading}
                onClick={handleLogout}>
                Logout</button>
            </div>
        </>
    )
}