//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { PromoterContext } from "../promoters/PromoterProvider";


//export function to display form for new promoter
export const PromoterForm = () => {
    
    const { addPromoter, getPromoterById, editPromoter, getPromoters } = useContext(PromoterContext)
    const { showId } = useParams()
    const [ isLoading, setIsLoading ] = useState(true);
    const history = useHistory();
    
    //Define the intial state of the Promoter with useState()
    const [promoter, setPromoter] = useState({
        address: "",
        cell_phone: "",
        city: "",
        company: "",
        email: "", 
        name: "",
        notes: "",
        phone: "",
        state: "",
        zip: ""
    });




    //when something changes, save it with setPromoter
    const handleControlledInputChange = (event) => {
        //make a new copy of promoter
        const newPromoter = { ...promoter }
        //the value of the event
        let selectedVal = event.target.value

        /* Set the property to the new value
        using object bracket notation. */
        newPromoter[event.target.id] = selectedVal
        
        // update state
        setPromoter(newPromoter)   
    }



    //handle save function
    const handleClickSavePromoter = (event) => {
        //Prevents the browser from submitting the form
        event.preventDefault() 
        
       //if in the edit page, editPromoter() then navigate to promoters 
       if (promoterId) {
        editPromoter(promoter)
        .then(history.goBack)
        
        } else {
       
        //create a new Promoter then move to newMainParachute()
        addPromoter(promoter)
        .then(() => history.push("/newmainparachute"))
      
    }}


    // useEffect(() => {
    //     //get all Promoters
    //     getPromoters().then(() => {

    //     // if showID exists
    //     if (showId) {
    //         //get that promoter
    //         getPromoterById(promoterId)
    //         //then setPromoter to that found Promoter
    //         .then(Promoter => {
    //             setPromoter(Promoter)
                
    //             setIsLoading(false)
    //         })
    //     } else {
    //         // else there is no data
    //         setIsLoading(false)
    //     }
    //     })
    // }, [])


    //Return this HTML
    return (
        <>
        <article id="promoter_form_a">
        <form className="promoterForm">
            <h2 className="formTitle">Promoter Information</h2>
            <div className="flex">

                <div className="column">
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="name">Promoter: </label>
                            <input type="text" id="name" className="form-control"
                            autoFocus placeholder="Promoter" value={promoter.name}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="company">Company: </label>
                            <input type="text" id="company" className="form-control"
                            placeholder="Company" value={promoter.company}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" className="form-control"
                            placeholder="Address" value={promoter.address}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                </div>

                <div className="row">
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="city">City: </label>
                            <input type="text" id="city" className="form-control" 
                            placeholder="City" value={promoter.city}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="state">St: </label>
                            <input type="text" id="state" className="form-control" 
                            placeholder="Promoter Time" value={promoter.state}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="zip">Zip: </label>
                            <input type="text" id="zip" className="form-control" 
                            placeholder="Zip" value={promoter.zip}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                </div>

                <div className="row">
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="phone">Phone: </label>
                            <input type="text" id="phone" className="form-control"
                            placeholder="Phone" value={promoter.phone}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="cell_phone">Cell: </label>
                            <input type="text" id="cell_phone" className="form-control"
                            placeholder="Cell" value={promoter.cell_phone}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                </div>

                <div className="row">
                    <fieldset className="form">
                        <div className="form-group">
                            <label htmlFor="email">E-mail: </label>
                            <input type="text" id="email" className="form-control"
                            placeholder="E-mail" value={promoter.email}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                </div>

                    <fieldset className="form">
                        <div className="form-group">    
                            <textarea cols="50" rows="10" 
                            id="notes" className="form-control"
                            value={show.notes} placeholder="Notes"
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    
                    
                </div>
            
            
            
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={handleClickSavePromoter}>
                Save Promoter
            </button>
        </form>
        </article>
        </>
    )
    }
