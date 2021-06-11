import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"

export const Register = (props) => {
    const firstName = React.createRef()
    const lastName = React.createRef()
    const email = React.createRef()
    const bio = React.createRef()
    const password = React.createRef()
    const verifyPassword = React.createRef()
    const passwordDialog = React.createRef()
    const history = useHistory()

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
                        history.push("/")
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
