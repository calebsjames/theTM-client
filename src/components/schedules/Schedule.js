import { useContext } from "react"
import { ScheduleContext } from "../schedules/ScheduleProvider";





export const Schedule = ({scheduleInstance}) => {
    
    const { updateSchedule, getSchedules, schedule, setSchedule, deleteSchedule } = useContext(ScheduleContext)
   

    setSchedule(schedule)
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



    const handleDeleteEntry = () => {  
        deleteSchedule(scheduleInstance.id)
        // .then(getSchedules) 
    }



    return(
    <article id={`scheduleEntry--${scheduleInstance?.id}`}>
        <form className="scheduleForm">

            <div className="flex">

                <fieldset className="form">
                    <div className="form-group">
                        <input type="time" id=" " className="form-field"
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
                onClick={handleDeleteEntry}>
                -</button>

            </div>

        </form>
    </article>
    )
}
