//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { HotelContext } from "../hotels/HotelProvider";
import { ShowContext } from "../shows/ShowProvider";
import "./Hotel.css"

//export function to display form for new hotel
export const HotelForm = () => {
    
    const { addHotel, getHotelById, editHotel, getHotels, hotel, setHotel } = useContext(HotelContext)
    const { addShow, getShowById, editShow, getShows, show, setShow } = useContext(ShowContext)
    const { showId } = useParams()
    const [ isLoading, setIsLoading ] = useState(true);
    const history = useHistory();
    




    //when something changes, save it with setHotel
    const handleControlledInputChange = (event) => {
        //make a new copy of hotel
        const newHotel = { ...hotel }
        //the value of the event
        let selectedVal = event.target.value

        /* Set the property to the new value
        using object bracket notation. */
        newHotel[event.target.id] = selectedVal
        
        // update state
        setHotel(newHotel)   
    }



    
    useEffect(() => {

        getShowById(showId)
        //then setShow to that found Show
        .then(show => {
            
                setHotel(show?.hotel)
                
                 
        
    })
}, [showId])



    //Return this HTML
    return (
        <>
        <article id="hotel_form_a">
        <form className="hotelForm">
            <h2 className="formTitle">Lodging</h2>
            <div className="flex">

                <div className="column">
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="name">Hotel: </label>
                            <input type="text" id="name" className="form-field lc1"
                             placeholder="Hotel" value={hotel?.name}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">    
                            <textarea cols="50" rows="30" 
                            id="address" className="form-field lc1"
                            value={hotel?.address} placeholder="Address"
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                </div>

                <div className="column">
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="phone">Phone: </label>
                            <input type="text" id="phone" className="form-field lc2"
                            placeholder="Phone" value={hotel?.phone}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">    
                            <textarea cols="50" rows="10" 
                            id="confirmation" className="form-field lc2"
                            value={hotel?.confirmation} placeholder="Confirmation numbers"
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                </div>

                
                </div>

                
            
            

        </form>
        </article>
        </>
    )
    }
