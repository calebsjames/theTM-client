//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ShowContext } from "../shows/ShowProvider";
import "../App.css"

//export function to display form for new show
export const ShowFormB = () => {
    
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
    }, [])


    //Return this HTML
    return (
        <>
        <article id="show_form_a">
        <form className="showForm">
            <fieldset className="form">
                <div className="form-group">
                    <label className="label" htmlFor="support">Support: </label>
                    <input type="text" id="support" className="form-field"
                    autoFocus placeholder="Support" value={show.support}
                    onChange={handleControlledInputChange}/>
                </div>
            </fieldset>

            <div className="flex">
                <fieldset className="form">
                    <div className="form-group">    
                        <textarea cols="50" rows="10" 
                        id="notes" className="form-field"
                        value={show.notes} placeholder="Notes"
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>

                
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
                            <label className="label" htmlFor="contract_signed">Contract Signed</label>
                            <input type="checkbox" id="contract_signed" className="form-field"
                            name="contract_signed" checked={show.contract_signed} 
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
                        <div className="form-group">
                            <label className="label" htmlFor="advanced">Advanced</label>
                            <input type="checkbox" id="advanced" className="form-field"
                            name="advanced" checked={show.advanced} 
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
