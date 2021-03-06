//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ShowContext } from "./ShowProvider";
import "../App.css"

//export function to display form for new show
export const ShowCheckBoxes = () => {
    
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
        getShows().then(() => {

            //get that show
            getShowById(showId)
            //then setShow to that found Show
            .then(Show => {
                setShow(Show)
                
                setIsLoading(false)
            })
        })
    }, [showId])


    //Return this HTML
    return (
        <>
        <article id="showFormB">
            <div id="checks">
                <fieldset className="checkbox">
                    <div className="form-group">
                        <label className="label" htmlFor="contracted">Contracted</label>
                        <input type="checkbox" id="contracted" className="form-field"
                        name="contracted" checked={show.contracted} 
                        onChange={handleCheckboxChange}/>
                    </div>
                </fieldset>
                
                <fieldset className="checkbox">
                    <div className="form-group">
                        <label className="label" htmlFor="date_on_calendar">On Calendar</label>
                        <input type="checkbox" id="date_on_calendar" className="form-field"
                        name="date_on_calendar" checked={show.date_on_calendar} 
                        onChange={handleCheckboxChange}/>
                    </div>
                </fieldset>
                <fieldset className="checkbox">
                    <div className="form-group">
                        <label className="label" htmlFor="date_on_artist_site">On Artist Site</label>
                        <input type="checkbox" id="date_on_artist_site" className="form-field"
                        name="date_on_artist_site" checked={show.date_on_artist_site} 
                        onChange={handleCheckboxChange}/>
                    </div>
                </fieldset>
                <fieldset className="checkbox">
                    <div className="form-group">
                        <label className="label" htmlFor="date_on_venue_site">On Venue Site</label>
                        <input type="checkbox" id="date_on_venue_site" className="form-field"
                        name="date_on_venue_site" checked={show.date_on_venue_site} 
                        onChange={handleCheckboxChange}/>
                    </div>
                </fieldset>
                <fieldset className="checkbox">
                    <div className="form-group">
                        <label className="label" htmlFor="date_on_socials">On Socials</label>
                        <input type="checkbox" id="date_on_socials" className="form-field"
                        name="date_on_socials" checked={show.date_on_socials} 
                        onChange={handleCheckboxChange}/>
                    </div>
                </fieldset>
                <fieldset className="checkbox">
                    <div className="form-group">
                        <label className="label" htmlFor="promo_materials_sent">Promo Materials</label>
                        <input type="checkbox" id="promo_materials_sent" className="form-field"
                        name="promo_materials_sent" checked={show.promo_materials_sent} 
                        onChange={handleCheckboxChange}/>
                    </div>
                </fieldset>
                <fieldset className="checkbox">
                    <div className="form-group ">
                        <label className="label" htmlFor="deposit_paid">Deposit Paid </label>
                        <input type="checkbox" id="deposit_paid" className="form-field"
                        name="deposit_paid" checked={show.deposit_paid} 
                        onChange={handleCheckboxChange}/>
                    </div>
                </fieldset>
                <fieldset className="checkbox">
                    <div className="form-group">
                        <label className="label" htmlFor="runner">Runner </label>
                        <input type="checkbox" id="runner" className="form-field"
                        name="runner" checked={show.runner} 
                        onChange={handleCheckboxChange}/>
                    </div>
                </fieldset>
                <fieldset className="checkbox">
                    <div className="form-group">
                        <label className="label" htmlFor="advanced">Advanced</label>
                        <input type="checkbox" id="advanced" className="form-field"
                        name="advanced" checked={show.advanced} 
                        onChange={handleCheckboxChange}/>
                    </div>
                </fieldset>
            </div>
        
        </article>
        </>
    )
    }
