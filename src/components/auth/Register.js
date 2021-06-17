import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { ShowContext } from "../shows/ShowProvider"
import "./Auth.css"

export const Register = (props) => {

    const { addShow } = useContext(ShowContext)

    const firstName = React.createRef()
    const lastName = React.createRef()
    const email = React.createRef()
    const bio = React.createRef()
    const password = React.createRef()
    const verifyPassword = React.createRef()
    const passwordDialog = React.createRef()
    const history = useHistory()
    
    
    const handleNewShow = () => {
        const newShow = {
            
            advanced: false,
            ages: "",
            artist: "",
            billing: "",
            bus_call: "00:00",
            comments: "",
            contracted: false,
            contract_signed: false,
            curfew: "00:00",
            date: "1950-01-01",
            date_on_artist_site: false,
            date_on_calendar: false,
            date_on_socials: false,
            date_on_venue_site: false,
            deposit: 0,
            deposit_paid: false,
            door_price: 0,
            door_time: "00:00",
            drive_time: "",
            gross_income: 0,
            guarantee: 0,
            guest_list: "",
            guest_list_sent: false,
            load_in: "00:00",
            miles_to_drive: 0,
            public_private: "",
            promo_materials_sent: false,
            routing: "",
            routing_notes: "",
            runner: false,     
            show_length: "",
            show_time: "00:00",
            sound_check: "00:00",
            support: "",
            status: "",
            terms: "",
            ticket_sales: 0,
            weather: "",
            hotel: null,
            promoter: null,
            venue: null
        };
        addShow(newShow)
        .then(showid => {
            history.push(`/show/${showid}`)

        }) 
    }


    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": email.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "email": email.current.value,
                "password": password.current.value
            }

            return fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("tm_token", res.token)
                        localStorage.setItem( "userId", res.id )
                        
                        handleNewShow()
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
                <fieldset>
                    <label className="label" htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-field" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label className="label" htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-field" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label className="label" htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-field" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label className="label" htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-field" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label className="label" htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-field" placeholder="Verify password" required />
                </fieldset>
                
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1 btn-sep icon-send" type="submit">Register</button>
                </fieldset>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}
