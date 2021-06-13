//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ScheduleContext } from "../schedules/ScheduleProvider";
import { ShowContext } from "../shows/ShowProvider";
import { Schedule } from "./Schedule";



//export function to display form for new schedule
export const ScheduleListForm = () => {
    
    const { schedules, addSchedule, getScheduleById, editSchedule, getSchedules, schedule, setSchedule } = useContext(ScheduleContext)
    const { addShow, getShowById, editShow, getShows, show, setShow } = useContext(ShowContext)
    const { showId } = useParams()
    // const [ isLoading, setIsLoading ] = useState(true);
    const history = useHistory();
    

    const handleScheduleEntry = () => {
    
        
        addSchedule(schedule)
        .then(getSchedules) 
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
        
        // update state
        setSchedule(newSchedule)   
    }



    let showDate = ""


    useEffect(() => {
        
        getSchedules()

    }, [show])

    let filteredSchedules = schedules.filter(s => parseInt(s.show.id) === parseInt(showId))
    
    //Return this HTML
    return (
        <>
        <section id="schedule">
            {filteredSchedules.map(scheduleObject => {
            
                return <Schedule key={scheduleObject.id} 
                scheduleInstance={scheduleObject}
                />

            })}
        </section>
        </>
    )
    }
