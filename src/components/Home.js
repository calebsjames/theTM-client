import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
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
    const { getShows, shows, searchTerms, show, updateShow, addShow } = useContext(ShowContext)
    // const { getUsers, users } = useContext(UserContext)
    const { getVenues, venue, updateVenue } = useContext(VenueContext)
    const { getPromoters, promoters, promoter, updatePromoter } = useContext(PromoterContext)
    const { getHotels, hotels, updateHotel, hotel } = useContext(HotelContext)
    const { getContactNotes, contactNote } = useContext(ContactNoteContext)
    const { getSchedules, schedule } = useContext(ScheduleContext)
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
     
    }, [])
   

    const handleClickSaveForm = (event) => {
        //Prevents the browser from submitting the form
         event.preventDefault() 
        updateVenue(venue)
        updatePromoter(promoter)
        updateShow(show)
        updateHotel(hotel)
        console.log(show.id)
        
    }

    const handleNewShow = () => {
        const newShow = {
            id: 0,
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
            hotelId: null,
            promoterId: null,
            venueId: null,
            user_id: 1
        };
        addShow(newShow)
        .then(showid => {
            history.push(`/show/${showid}`)

        }) 
    }


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

            <button className="btn btn-primary"
            // disabled={isLoading}
            onClick={handleClickSaveForm}>
            Save</button>
            
            
            <button className="btn btn-primary"
            // disabled={isLoading}
            onClick={handleNewShow}>
            New Show</button>
            
        </>
    )
}