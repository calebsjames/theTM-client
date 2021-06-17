import React, { useState } from "react"

export const UserContext = React.createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState({events:[]})

    const getUser = () => {
        return fetch("https://the-tm-api.herokuapp.com/users", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_user_id")}`
            }
        })
            .then(response => response.json())
            .then(setUser)
    }

    return (
        <UserContext.Provider value={{
            user, getUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
