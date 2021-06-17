import React, { useState, createContext } from "react"
import { useParams } from "react-router"

// The context is imported and used by individual components that need data. Makes a variable global.
export const ScheduleContext = createContext()

// This component establishes what data can be used.
export const ScheduleProvider = (props) => {
    const { showId } = useParams()
    const [schedules, setSchedules] = useState([])
    
    const [schedule, setSchedule] = useState({
        date: "1950-01-01",
        description: "",
        show: showId,
        time: "01:00:00"
        
    })


    const getSchedules = () => {
        return fetch("https://the-tm-api.herokuapp.com/schedules", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
        .then(setSchedules)
    }

    const addSchedule = scheduleObj => {
        
        return fetch("https://the-tm-api.herokuapp.com/schedules", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            },
            body: JSON.stringify(scheduleObj)
        })
        .then(getSchedules)
    }

    //function to get schedule by ID
    const getScheduleById = (id) => {
        return fetch(`https://the-tm-api.herokuapp.com/schedules/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
    }

    //function to delete a schedule
    const deleteSchedule = scheduleId => {
        return fetch(`https://the-tm-api.herokuapp.com/schedules/${scheduleId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(getSchedules)
    }

    const updateSchedule = schedule => {
        return fetch(`https://the-tm-api.herokuapp.com/schedules/${schedule.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("tm_token")}`
          },
          body: JSON.stringify(schedule)
        })
          .then(getSchedules)
      }

    const [ searchTerms, setSearchTerms ] = useState("")

    /*
        You return a context provider which has the
        `schedules` state, `getSchedules` function,
        and the `addSchedule` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ScheduleContext.Provider value={{
            schedules, getSchedules, addSchedule, getScheduleById, deleteSchedule, updateSchedule, searchTerms, setSearchTerms, schedule, setSchedule
        }}>
            {props.children}
        </ScheduleContext.Provider>
    )

}