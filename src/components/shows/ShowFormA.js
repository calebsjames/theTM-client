//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ShowContext } from "../shows/ShowProvider";
import "../App.css"
import "./Show.css"


//export function to display form for new show
export const ShowFormA = () => {
    
    const { addShow, getShowById, editShow, getShows, show, setShow } = useContext(ShowContext)
    const { showId } = useParams()
    const [ isLoading, setIsLoading ] = useState(true);
    const history = useHistory();
    



    //when something changes, save it with setShow
    const handleControlledInputChange = (event) => {
        //make a new copy of show
        const newShow = { ...show }
        //the value of the event
        let selectedVal = event.target.value

        /* Set the property to the new value
        using object bracket notation. */
        newShow[event.target.id] = selectedVal
        
        // update state
        setShow(newShow)   
    }

    
    //handle input changes for checkboxes
    const handleCheckboxChange = (event) => {
        //make a copy of show
        const newShow = { ...show }

        //get boolean of whether box is checked
        let selectedVal = event.target.checked

        //Set the property to the new boolean value of checked
        newShow[event.target.id] = selectedVal
        // update state
        setShow(newShow)   
    }


    


    useEffect(() => {
        //get all Shows

            //get that show
            getShowById(showId)
            //then setShow to that found Show
            .then(Show => {
                setShow(Show)                
                setIsLoading(false)
            })
        }
    , [showId])


    //Return this HTML
    return (
        <>
        <article id="show_form_a">
        <form className="showForm">
            <h2 className="formTitle">Show Information</h2>
            <fieldset className="form">
                <div className="form-group">
                    <label className="label" htmlFor="terms">Terms: </label>
                    <input type="text" id="terms" className="form-field"
                    autoFocus placeholder="Terms" value={show.terms}
                    onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <div className="flex">
                <div className="column">
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="load_in">Load-in: </label>
                            <input type="text" id="load_in" className="form-field"
                            placeholder="Load-in" value={show.load_in}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="sound_check">Sound Check</label>
                            <input type="text" id="sound_check" className="form-field"
                            placeholder="Sound Check" value={show.sound_check}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="doors">Doors: </label>
                            <input type="text" id="doors" className="form-field" 
                            placeholder="Doors" value={show.doors}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="show_time">Show Time: </label>
                            <input type="text" id="show_time" className="form-field" 
                            placeholder="Show Time" value={show.show_time}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="set_length">Set Length: </label>
                            <input type="text" id="set_length" className="form-field" 
                            placeholder="Set Length" value={show.set_length}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="deposit">Deposit: </label>
                            <input type="text" id="deposit" className="form-field"
                            placeholder="Deposit" value={show.deposit}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="ages">Ages: </label>
                            <input type="text" id="ages" className="form-field"
                            placeholder="Ages" value={show.ages}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                </div>
                <div className="column">
                    <fieldset className="form">
                        <div className="form-group">    
                            <label className="label" htmlFor="weather">Weather: </label>
                            <textarea cols="25" rows="10" 
                            id="weather" className="form-field"
                            value={show.weather} placeholder="Weather"
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>

                    {/* Change to select */}
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="public_private">Public / Private: </label>
                            <input type="text" id="public_private" className="form-field"
                            placeholder="Public / Private" value={show.public_private}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="door_price">Door Price: </label>
                            <input type="text" id="door_price" className="form-field"
                            placeholder="Door Price" value={show.door_price}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="billing">Billing: </label>
                            <input type="text" id="billing" className="form-field"
                            placeholder="Billing" value={show.billing}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="checkbox">
                        <div className="form-group">
                            <label className="label" htmlFor="deposit_paid">Deposit Paid: </label>
                            <input type="checkbox" id="deposit_paid" className="form-field"
                            name="deposit_paid" checked={show.deposit_paid} 
                            onChange={handleCheckboxChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="checkbox">
                        <div className="form-group">
                            <label className="label" htmlFor="runner">Runner: </label>
                            <input type="checkbox" id="runner" className="form-field"
                            name="runner" checked={show.runner} 
                            onChange={handleCheckboxChange}/>
                        </div>
                    </fieldset>
                </div>
            </div>
            
            
            
        </form>
        </article>
        </>
    )
    }
