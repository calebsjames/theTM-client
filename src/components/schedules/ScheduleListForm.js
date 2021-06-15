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
    









    useEffect(() => {
        
        getSchedules()

    }, [])

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
