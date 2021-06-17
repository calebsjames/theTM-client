//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ShowContext } from "../shows/ShowProvider";
import { VenueContext } from "../venues/VenueProvider";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./Venue.css"
import {VenueModal} from "./VenueModal";


//export function to display form for new venue
export const VenueForm = () => {
    
    const { getShowById, editShow, getShows, show } = useContext(ShowContext)
    const { showId } = useParams()
    const [ isLoading, setIsLoading ] = useState(true);
    const history = useHistory();
    
    
    
    const { addVenue, getVenueById, editVenue, deleteVenue, venue, setVenue, modal, setModal } = useContext(VenueContext)
    // export const VenueEdit = () => {
    //         editVenue(venue)
    // }
    
    
    


    //when something changes, save it with setVenue
    const handleControlledInputChange = (event) => {
        if(show?.venue) {
        //make a new copy of venue
        const newVenue = { ...venue }
        //the value of the event
        let selectedVal = event.target.value

        /* Set the property to the new value
        using object bracket notation. */
        newVenue[event.target.id] = selectedVal
        
        // update state
        setVenue(newVenue)
        } else {

            setModal(!modal)
        }   
    }

    const handleDelete = () => {
        deleteVenue(show?.venue?.id)
    }

    



    useEffect(() => {

            //get that show
            getShowById(showId)
            //then setShow to that found Show
            .then(show => {
                if(show?.venue) {
                    
                    setVenue(show?.venue)
                    
                } else {    
                    
                    setVenue({
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
                    })
                    setIsLoading(false)
                }
            })
        
    }, [showId])



    //Return this HTML
    return (
        <>
        <article id="venue_form_a">
        <form className="venueForm">
            <h2 className="formTitle">Venue Information</h2>
            
            <button onClick={()=> handleDelete()}>
                -
            </button>

                <div className="column">
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="name">Venue: </label>
                            <input type="text" id="name" className="form-field"
                            autoFocus placeholder="Venue Name" value={venue?.name}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="contact">Contact: </label>
                            <input type="text" id="contact" className="form-field"
                            placeholder="Contact" value={venue?.contact}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="address">Address</label>
                            <input type="text" id="address" className="form-field"
                            placeholder="Address" value={venue?.address}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                </div>

            <div className="flex">
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="city">City: </label>
                        <input type="text" id="city" className="form-field" 
                        placeholder="City" value={venue?.city}
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="state">St: </label>
                        <input type="text" id="state" className="form-field" 
                        placeholder="Venue Time" value={venue?.state}
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="zip">Zip: </label>
                        <input type="text" id="zip" className="form-field" 
                        placeholder="Zip" value={venue?.zip}
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
            </div>

                
            <div className="flex">
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="phone">Phone: </label>
                        <input type="text" id="phone" className="form-field"
                        placeholder="Phone" value={venue?.phone}
                        onChange={handleControlledInputChange} />
                    </div>
                </fieldset>
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="cell_phone">Cell: </label>
                        <input type="text" id="cell_phone" className="form-field"
                        placeholder="Cell" value={venue?.cell_phone}
                        onChange={handleControlledInputChange} />
                    </div>
                </fieldset>
            </div>

                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="email">E-mail: </label>
                            <input type="text" id="email" className="form-field"
                            placeholder="E-mail" value={venue?.email}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                
                    
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="website">Website: </label>
                            <input type="text" id="website" className="form-field"
                            placeholder="Website" value={venue?.website}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                

                <div className="flex">
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="merch_sales">Merch Sales: </label>
                            <input type="text" id="merch_sales" className="form-field"
                            placeholder="Merch Sales" value={venue?.merch_sales}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="capacity">Capacity: </label>
                            <input type="text" id="capacity" className="form-field"
                            placeholder="Website" value={venue?.capacity}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="hall_fee">Hall Fee: </label>
                            <input type="text" id="hall_fee" className="form-field"
                            placeholder="Hall Fee" value={venue?.hall_fee}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                </div>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="merch_fee">Merch Fee: </label>
                            <input type="text" id="merch_fee" className="form-field"
                            placeholder="Merch Fee" value={venue?.merch_fee}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
        </form>

        

        </article>
        </>
    )
    }
