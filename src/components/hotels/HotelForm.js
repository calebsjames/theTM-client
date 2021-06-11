//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { HotelContext } from "../hotels/HotelProvider";


//export function to display form for new hotel
export const HotelForm = () => {
    
    const { addHotel, getHotelById, editHotel, getHotels } = useContext(HotelContext)
    const { showId } = useParams()
    const [ isLoading, setIsLoading ] = useState(true);
    const history = useHistory();
    
    //Define the intial state of the Hotel with useState()
    const [hotel, setHotel] = useState({
        address: "",
        confirmation: "", 
        name: "",
        notes: "",
        phone: ""
    });




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



    


    // useEffect(() => {
    //     //get all Hotels
    //     getHotels().then(() => {

    //     // if showID exists
    //     if (showId) {
    //         //get that hotel
    //         getHotelById(hotelId)
    //         //then setHotel to that found Hotel
    //         .then(Hotel => {
    //             setHotel(Hotel)
                
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
        <article id="hotel_form_a">
        <form className="hotelForm">
            <h2 className="formTitle">Lodging</h2>
            <div className="flex">

                <div className="column">
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="name">Hotel: </label>
                            <input type="text" id="name" className="form-field"
                             placeholder="Hotel" value={hotel.name}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">    
                            <textarea cols="50" rows="10" 
                            id="address" className="form-field"
                            value={hotel.address} placeholder="Address"
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                </div>

                <div className="column">
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="phone">Phone: </label>
                            <input type="text" id="phone" className="form-field"
                            placeholder="Phone" value={hotel.phone}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">    
                            <textarea cols="50" rows="10" 
                            id="confirmation" className="form-field"
                            value={hotel.confirmation} placeholder="Confirmation numbers"
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                </div>

                <div className="column">
                    <fieldset className="form">
                        <div className="form-group">    
                            <textarea cols="50" rows="10" 
                            id="notes" className="form-field"
                            value={hotel.notes} placeholder="Notes"
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
