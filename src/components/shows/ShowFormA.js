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
        ages: "",
        billing: "",
        deposit: "",
        deposit_paid: false,
        doors: "",
        door_price: "",
        load_in: "",
        public_private: "",
        runner: false,     
        set_length: "",
        show_time: "",
        sound_check: "",
        terms: "",
        weather: ""
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
            <h2 className="formTitle">Show Information</h2>
            <fieldset className="form">
                <div className="form-group">
                    <label htmlFor="terms">Terms: </label>
                    <input type="text" id="terms" className="form-control"
                    autoFocus placeholder="Terms" value={show.terms}
                    onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <div className="flex">
                <div className="column">
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="load_in">Load-in: </label>
                            <input type="text" id="load_in" className="form-control"
                            placeholder="Load-in" value={show.load_in}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="sound_check">Sound Check</label>
                            <input type="text" id="sound_check" className="form-control"
                            placeholder="Sound Check" value={show.sound_check}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="doors">Doors: </label>
                            <input type="text" id="doors" className="form-control" 
                            placeholder="Doors" value={show.doors}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="show_time">Show Time: </label>
                            <input type="text" id="show_time" className="form-control" 
                            placeholder="Show Time" value={show.show_time}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="set_length">Set Length: </label>
                            <input type="text" id="set_length" className="form-control" 
                            placeholder="Set Length" value={show.set_length}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="deposit">Deposit: </label>
                            <input type="text" id="deposit" className="form-control"
                            placeholder="Deposit" value={show.deposit}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="ages">Ages: </label>
                            <input type="text" id="ages" className="form-control"
                            placeholder="Ages" value={show.ages}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                </div>
                <div className="column">
                    <fieldset className="form">
                        <div className="form-group">    
                            <textarea cols="50" rows="10" 
                            id="weather" className="form-control"
                            value={show.weather} placeholder="Weather"
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>

                    {/* Change to select */}
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="public_private">Public / Private: </label>
                            <input type="text" id="public_private" className="form-control"
                            placeholder="Public / Private" value={show.public_private}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="door_price">Door Price: </label>
                            <input type="text" id="door_price" className="form-control"
                            placeholder="Door Price" value={show.door_price}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="billing">Billing: </label>
                            <input type="text" id="billing" className="form-control"
                            placeholder="Billing" value={show.billing}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="checkbox">
                        <div className="form-group">
                            <label htmlFor="deposit_paid">Deposit Paid: </label>
                            <input type="checkbox" id="deposit_paid" className="form-control"
                            name="deposit_paid" checked={show.deposit_paid} 
                            onChange={handleCheckboxChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="checkbox">
                        <div className="form-group">
                            <label htmlFor="runner">Runner: </label>
                            <input type="checkbox" id="runner" className="form-control"
                            name="runner" checked={show.runner} 
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
