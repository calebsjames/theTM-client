import React, { useState, useContext, useEffect } from "react"
import { VenueContext } from "../venues/VenueProvider"
import { useHistory } from "react-router-dom"
import { VenueSearch } from "../venues/VenueSearch"
import { Venue } from "./Venue"




export const VenueList = () => {
    
    const { getVenues, venues, searchTerms } = useContext(VenueContext)
    // Since you are no longer ALWAYS displaying all of the venues
    const [ filteredVenues, setFiltered ] = useState([])

    const sortedVenues  = venues.sort((a, b) => a.name.localeCompare(b.name))

    // Initialization effect hook -> Go get venue data 
     useEffect(() => {
       getVenues()
     }, [])
    
    const history = useHistory()

  
    useEffect(() => {
        if (searchTerms !== undefined) {
         
          // If the search field is not blank, display matching venues
          const subset = sortedVenues.filter(venue => venue.name.toLowerCase().includes(searchTerms.toLowerCase()))
          setFiltered(subset)
        } else {
          // If the search field is blank, display all venues
          setFiltered(venues)
        }
      }, [searchTerms, venues])


      return (
        <>
            
            <div className="venueNav">
            <VenueSearch />
            </div>
            <div className="venues">
                {
                  
                  filteredVenues.map(venueObject => {
                    
                      return <Venue key={venueObject.id} 
                      venueInstance={venueObject}
                      />
                    })
                }
            </div> 
        </>
    )
}


