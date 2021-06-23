//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ScheduleContext } from "../schedules/ScheduleProvider";
import { ShowContext } from "../shows/ShowProvider";



//export function to display form for new schedule
export const ScheduleForm = () => {
    
    const { addSchedule, getSchedules, schedule, setSchedule } = useContext(ScheduleContext)
    const [ isLoading, setIsLoading ] = useState(true);
    const showId = useParams()
    

    const handleScheduleEntry = (e) => {
        
        e.preventDefault()
        
        console.log(showId)
        addSchedule(schedule)
    }


    //when something changes, save it with setSchedule
    const handleControlledInputChange = (event) => {
        //make a new copy of schedule
        const newSchedule = { ...schedule }
        //the value of the event
        let selectedVal = event.target.value

        /* Set the property to the new value
        using object bracket notation. */
        newSchedule[event.target.id] = selectedVal
        newSchedule.show = showId.showId
        console.log(showId.showId)
        
        // update state
        setSchedule(newSchedule)   
    }



    //Return this HTML
    return (
        <>
        <article id="schedule_form_a">
        <form className="scheduleForm">
            <h2 className="formTitle">Schedule</h2>
       

                <div className="flex">
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="time">Time: </label>
                            <input type="time" id="time" className="form-field"
                             placeholder="Time" value={schedule?.time}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                   
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="description">Description: </label>
                            <input type="text" id="description" className="form-field"
                            placeholder="Description" value={schedule?.description}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <button className="btn btn-primary"
                    // disabled={isLoading}

                    onClick={handleScheduleEntry}>
                    +</button>
                </div>
        </form>
        </article>
        </>
    )
    }
