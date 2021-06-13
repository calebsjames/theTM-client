import { useContext } from "react"
import { ScheduleContext } from "../schedules/ScheduleProvider";





export const Schedule = ({scheduleInstance}) => {
    
    const { schedules, addSchedule, getScheduleById, updateSchedule, getSchedules, schedule, setSchedule } = useContext(ScheduleContext)
   


    //when something changes, save it with setSchedule
    const handleControlledInputChange = (event) => {
        //make a new copy of schedule
        const newSchedule = { ...schedule }
        //the value of the event
        let selectedVal = event.target.value
        // Set the property to the new value 
        newSchedule[event.target.id] = selectedVal       
        // update state
        setSchedule(newSchedule)   
    }



    const handleScheduleEntry = () => {  
        updateSchedule(schedule)
        .then(getSchedules) 
    }



    return(
    <article id={`scheduleEntry--${scheduleInstance?.id}`}>
        <form className="scheduleForm">

            <div className="flex">

                <fieldset className="form">
                    <div className="form-group">
                        <input type="time" id="time" className="form-field"
                        placeholder="Time" value={scheduleInstance?.time}
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
            
                <fieldset className="form">
                    <div className="form-group">
                        <input type="text" id="description" className="form-field"
                        placeholder="Description" value={scheduleInstance?.description}
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>

                <button className="btn btn-primary"
                onClick={handleScheduleEntry}>
                +</button>

            </div>

        </form>
    </article>
    )
}
