//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ShowContext } from "./ShowProvider";


//export function to display form for new show
export const ShowForm = () => {
    
    const { addShow, getShowById, editShow, getShows } = useContext(ShowContext)
    const { showId } = useParams()
    const [ isLoading, setIsLoading ] = useState(true);
    const history = useHistory();
    
    //Define the intial state of the Show with useState()
    const [show, setShow] = useState({
        routing: "",
        miles_to_drive: "",
        drive_time: "",
        bus_call: "",
        notes: ""
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

    


    //handle save function
    const handleClickSaveShow = (event) => {
        //Prevents the browser from submitting the form
        event.preventDefault() 
        
       //if in the edit page, editShow() then navigate to shows 
       if (showId) {
        editShow(show)
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
            <h2 className="formTitle">Routing</h2>

            <div className="flex">
                <div className="row">
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="routing">Routing: </label>
                            <input type="text" id="routing" className="form-control"
                            autoFocus placeholder="Routing" value={show.routing}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <div className="flex">
                        
                        <div className="column">
                            <fieldset className="form">
                                <div className="form-group">
                                    <label htmlFor="miles_to_drive">Miles: </label>
                                    <input type="text" id="miles_to_drive" className="form-control"
                                    placeholder="Miles" value={show.miles_to_drive}
                                    onChange={handleControlledInputChange}/>
                                </div>
                            </fieldset>
                            
                            <div className="column">
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
                            </div>
                        </div>

                        <div className="column">
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
                        </div>

                        
                        <div className="column">
                            <fieldset className="form">
                                <div className="form-group">    
                                    <textarea cols="50" rows="10" 
                                    id="notes" className="form-control"
                                    value={show.notes} placeholder="Notes"
                                    onChange={handleControlledInputChange}/>
                                </div>
                            </fieldset>

                        </div>
                    </div>
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
