import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { ShowContext } from "../shows/ShowProvider"
import "./Auth.css"




export const Login = props => {
    const email = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()
    const history = useHistory()
    const { getsShows } = useContext(ShowContext)
    
    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("https://the-tm-api.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem( "tm_token", res.token )

                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Tour Manager</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label className="label" htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" id="email" className="form-field"  placeholder="Email address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label className="label" htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-field"  placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign:"center"
                    }}>
                        <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
