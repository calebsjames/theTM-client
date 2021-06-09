import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data. Makes a variable global.
export const ScheduleContext = createContext()

// This component establishes what data can be used.
export const ScheduleProvider = (props) => {
    const [schedules, setSchedules] = useState([])

    const getSchedules = () => {
        return fetch("http://localhost:8000/schedules", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
        .then(setSchedules)
    }

    const addSchedule = scheduleObj => {
        return fetch("http://localhost:8000/schedules", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            },
            body: JSON.stringify(scheduleObj)
        })
        .then(getSchedules)
    }

    //function to get schedule by ID
    const getScheduleById = (id) => {
        return fetch(`http://localhost:8000/schedules/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            }
        })
            .then(res => res.json())
    }

    //function to delete a schedule
    const deleteSchedule = scheduleId => {
        return fetch(`http://localhost:8000/schedules/${scheduleId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            }
        })
            .then(getSchedules)
    }

    const updateSchedule = schedule => {
        return fetch(`http://localhost:8000/schedules/${schedule.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
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
            schedules, getSchedules, addSchedule, getScheduleById, deleteSchedule, updateSchedule, searchTerms, setSearchTerms
        }}>
            {props.children}
        </ScheduleContext.Provider>
    )

}