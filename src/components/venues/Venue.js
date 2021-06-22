import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ShowContext } from '../shows/ShowProvider';
import { useParams } from 'react-router';
import { VenueContext } from "./VenueProvider";




//Called in CutomerList.js
export const Venue = ({ venueInstance }) => {
    
    const { show, getShowById, setShow, updateShow, getShows } = useContext(ShowContext)
    const { venue, getVenueById, setVenue, updateVenue, getVenues } = useContext(VenueContext)
    const { modal, setModal } = useContext(VenueContext)

    const showId = useParams()

    const handleVenueChoice = () => {
        
        
        getShowById(showId.showId)
            //then setShow to that found Show
            .then(Show => {
                setShow(Show)
                show.venue = venueInstance
                setVenue(venueInstance)            
                setShow(show)
                updateShow(show)
                getShows()
                setModal(!modal)
        
        
        })
    }

    return(<section className="venue">
        
        <button id={`${venueInstance?.name}`} onClick={handleVenueChoice}> 
        { venueInstance?.name }    { venueInstance?.city } { venueInstance?.state }
        </button>
        
        
    </section>
    )
}

