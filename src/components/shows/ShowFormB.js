//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ShowContext } from "../shows/ShowProvider";


//export function to display form for new show
export const ShowForm = () => {
    
    const { addShow, getShowById, editShow, getShows } = useContext(ShowContext)
    const { showId } = useParams()
    const [ isLoading, setIsLoading ] = useState(true);
    const history = useHistory();
    
    //Define the intial state of the Show with useState()
    const [show, setShow] = useState({
        advanced: false,
        support: "",
        notes: "",
        date_on_artist_site: false,
        date_on_calendar: false,
        date_on_socials: false,
        date_on_venue_site: false,
        contracted: false,
        contract_signed: false,
        promo_materials_sent: false
    });




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


    //handle save function
    const handleClickSaveShow = (event) => {
        //Prevents the browser from submitting the form
        event.preventDefault() 
        
       //if in the edit page, editShow() then navigate to shows 
       if (showId) {
        editShow(show)
        editVenue(venue)
        .then(history.goBack)
        
        } else {
       
        //create a new Show then move to newMainParachute()
        addShow(show)
        .then(() => history.push("/newmainparachute"))
      
    }}


    useEffect(() => {
        //get all Shows
        getShows().then(() => {

        // if showID exists
        if (showId) {
            //get that show
            getShowById(showId)
            //then setShow to that found Show
            .then(Show => {
                setShow(Show)
                
                setIsLoading(false)
            })
        } else {
            // else there is no data
            setIsLoading(false)
        }
        })
    }, [])


    //Return this HTML
    return (
        <>
        <article id="show_form_a">
        <form className="showForm">
            <fieldset className="form">
                <div className="form-group">
                    <label htmlFor="support">Support: </label>
                    <input type="text" id="support" className="form-control"
                    autoFocus placeholder="Support" value={show.support}
                    onChange={handleControlledInputChange}/>
                </div>
            </fieldset>

            <div className="flex">

                <fieldset className="form">
                    <div className="form-group">    
                        <textarea cols="50" rows="10" 
                        id="notes" className="form-control"
                        value={show.notes} placeholder="Notes"
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>

                <div className="row">
                    <fieldset className="checkbox">
                        <div className="form-group">
                            <label htmlFor="contracted">Contracted</label>
                            <input type="checkbox" id="contracted" className="form-control"
                            name="contracted" checked={show.contracted} 
                            onChange={handleCheckboxChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="checkbox">
                        <div className="form-group">
                            <label htmlFor="contract_signed">Contract Signed</label>
                            <input type="checkbox" id="contract_signed" className="form-control"
                            name="contract_signed" checked={show.contract_signed} 
                            onChange={handleCheckboxChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="checkbox">
                        <div className="form-group">
                            <label htmlFor="date_on_calendar">On Calendar</label>
                            <input type="checkbox" id="date_on_calendar" className="form-control"
                            name="date_on_calendar" checked={show.date_on_calendar} 
                            onChange={handleCheckboxChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="checkbox">
                        <div className="form-group">
                            <label htmlFor="date_on_artist_site">On Artist Site</label>
                            <input type="checkbox" id="date_on_artist_site" className="form-control"
                            name="date_on_artist_site" checked={show.date_on_artist_site} 
                            onChange={handleCheckboxChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="checkbox">
                        <div className="form-group">
                            <label htmlFor="date_on_venue_site">On Venue Site</label>
                            <input type="checkbox" id="date_on_venue_site" className="form-control"
                            name="date_on_venue_site" checked={show.date_on_venue_site} 
                            onChange={handleCheckboxChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="checkbox">
                        <div className="form-group">
                            <label htmlFor="date_on_socials">On Socials</label>
                            <input type="checkbox" id="date_on_socials" className="form-control"
                            name="date_on_socials" checked={show.date_on_socials} 
                            onChange={handleCheckboxChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="checkbox">
                        <div className="form-group">
                            <label htmlFor="promo_materials_sent">Promo Materials</label>
                            <input type="checkbox" id="promo_materials_sent" className="form-control"
                            name="promo_materials_sent" checked={show.promo_materials_sent} 
                            onChange={handleCheckboxChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="checkbox">
                        <div className="form-group">
                            <label htmlFor="advanced">Advanced</label>
                            <input type="checkbox" id="advanced" className="form-control"
                            name="advanced" checked={show.advanced} 
                            onChange={handleCheckboxChange}/>
                        </div>
                    </fieldset>
                </div>
            </div>
            
            
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={handleClickSaveShow}>
                Save Show
            </button>
        </form>
        </article>
        </>
    )
    }
