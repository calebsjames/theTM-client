import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Dropdown.css"
import { HotelContext } from "./hotels/HotelProvider";
import { PromoterContext } from "./promoters/PromoterProvider";
import { ShowContext } from "./shows/ShowProvider";
import { VenueContext } from "./venues/VenueProvider";


export const DropDownNav = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const Click = () => setIsActive(!isActive);
    const history = useHistory()
    const { addShow, updateShow, show, getShows } = useContext(ShowContext)
    const { venue, updateVenue, deleteVenue, getVenues } = useContext(VenueContext)
    const { hotel, updateHotel } = useContext(HotelContext)
    const { promoter, updatePromoter, deletePromoter } = useContext(PromoterContext)
    const currentDate = new Date().toISOString().slice(0, 10)
    const showId = useParams()
    
    useEffect(() => {
        
        getShows()
        getVenues()
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
            date: currentDate,
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



    const handleDeleteVenue = () => {
        debugger
        deleteVenue(show?.venue?.id)
        .then(history.push (`/show/${showId.showId}`))
    }


    const handleDeletePromoter = () => {
        deletePromoter(show?.promoter?.id)
        .then(history.push (`/show/${showId.showId}`))
    }


    const handleLogout = (event) => {
        localStorage.removeItem("tm_token")
        history.push({ pathname: "/" })
        
    }



    return (
      <div className="menu-container">
        <button onClick={Click} className="menu-trigger">
          <span>Menu</span>
          
        </button>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            
            <li className="ddlink" onClick={handleClickSaveForm}>Save </li>
            <li className="ddlink" onClick={handleNewShow}>New Show </li>
            <li className="ddlink" onClick={handleDeleteVenue}>Delete Venue </li>
            <li className="ddlink" onClick={handleDeletePromoter}>Delete Promoter </li>
            <li className="ddlink" onClick={handleLogout}>Log Out </li>
            
          </ul>
        </nav>
      </div>
    );
  };