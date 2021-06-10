//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { VenueContext } from "../venues/VenueProvider";


//export function to display form for new venue
export const VenueForm = () => {
    
    const { addVenue, getVenueById, editVenue, getVenues } = useContext(VenueContext)
    const { showId } = useParams()
    const [ isLoading, setIsLoading ] = useState(true);
    const history = useHistory();
    
    //Define the intial state of the Venue with useState()
    const [venue, setVenue] = useState({
        address: "",
        capacity: 0,
        cell_phone: "",
        city: "",
        contact: "",
        email: "",
        hall_fee: 0,
        phone: "",
        website: "",
        merch_sales: "",
        merch_fee: "",     
        name: "",
        state: "",
        zip: ""
    });




    //when something changes, save it with setVenue
    const handleControlledInputChange = (event) => {
        //make a new copy of venue
        const newVenue = { ...venue }
        //the value of the event
        let selectedVal = event.target.value

        /* Set the property to the new value
        using object bracket notation. */
        newVenue[event.target.id] = selectedVal
        
        // update state
        setVenue(newVenue)   
    }



    //handle save function
    const handleClickSaveVenue = (event) => {
        //Prevents the browser from submitting the form
        event.preventDefault() 
        
       //if in the edit page, editVenue() then navigate to venues 
       if (venueId) {
        editVenue(venue)
        .then(history.goBack)
        
        } else {
       
        //create a new Venue then move to newMainParachute()
        addVenue(venue)
        .then(() => history.push("/newmainparachute"))
      
    }}


    // useEffect(() => {
    //     //get all Venues
    //     getVenues().then(() => {

    //     // if showID exists
    //     if (showId) {
    //         //get that venue
    //         getVenueById(venueId)
    //         //then setVenue to that found Venue
    //         .then(Venue => {
    //             setVenue(Venue)
                
    //             setIsLoading(false)
    //         })
    //     } else {
    //         // else there is no data
    //         setIsLoading(false)
    //     }
    //     })
    // }, [])


    //Return this HTML
    return (
        <>
        <article id="venue_form_a">
        <form className="venueForm">
            <h2 className="formTitle">Venue Information</h2>
            <div className="flex">

                <div className="column">
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="name">Venue: </label>
                            <input type="text" id="name" className="form-control"
                            autoFocus placeholder="Venue Name" value={venue.name}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="contact">Contact: </label>
                            <input type="text" id="contact" className="form-control"
                            placeholder="Contact" value={venue.contact}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" className="form-control"
                            placeholder="Address" value={venue.address}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                </div>

                <div className="row">
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="city">City: </label>
                            <input type="text" id="city" className="form-control" 
                            placeholder="City" value={venue.city}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="state">St: </label>
                            <input type="text" id="state" className="form-control" 
                            placeholder="Venue Time" value={venue.state}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="zip">Zip: </label>
                            <input type="text" id="zip" className="form-control" 
                            placeholder="Zip" value={venue.zip}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                </div>

                <div className="row">
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="phone">Phone: </label>
                            <input type="text" id="phone" className="form-control"
                            placeholder="Phone" value={venue.phone}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="cell_phone">Cell: </label>
                            <input type="text" id="cell_phone" className="form-control"
                            placeholder="Cell" value={venue.cell_phone}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                </div>

                <div className="row">
                    
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="website">Website: </label>
                            <input type="text" id="website" className="form-control"
                            placeholder="Website" value={venue.website}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="capacity">Capacity: </label>
                            <input type="text" id="capacity" className="form-control"
                            placeholder="Website" value={venue.capacity}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                </div>

                <div className="row">
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="merch_sales">Merch Sales: </label>
                            <input type="text" id="merch_sales" className="form-control"
                            placeholder="Merch Sales" value={venue.merch_sales}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="merch_fee">Merch Fee: </label>
                            <input type="text" id="merch_fee" className="form-control"
                            placeholder="Merch Fee" value={venue.merch_fee}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="hall_fee">Hall Fee: </label>
                            <input type="text" id="hall_fee" className="form-control"
                            placeholder="Hall Fee" value={venue.hall_fee}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                </div>

                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="email">E-mail: </label>
                            <input type="text" id="email" className="form-control"
                            placeholder="E-mail" value={venue.email}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    
                    
                </div>
            
            
            
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={handleClickSaveVenue}>
                Save Venue
            </button>
        </form>
        </article>
        </>
    )
    }
