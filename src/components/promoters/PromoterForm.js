//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { PromoterContext } from "../promoters/PromoterProvider";
import { ShowContext } from "../shows/ShowProvider";


//export function to display form for new promoter
export const PromoterForm = () => {
    
    const { addPromoter, getPromoterById, updatePromoter, getPromoters, promoter, setPromoter } = useContext(PromoterContext)
    const { addShow, getShowById, editShow, getShows, show } = useContext(ShowContext)
    const { showId } = useParams()
    const [ isLoading, setIsLoading ] = useState(true);
    const history = useHistory();
    

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





    useEffect(() => {
        //get all Shows
        getShows().then(() => {

            //get that show
            getShowById(showId)
            //then setShow to that found Show
            .then(Show => {
                if(show?.promoter) {
                    setPromoter(Show?.promoter)
                    
                    } else {    
                    
                    }
            })
        })
    }, [show])


    //Return this HTML
    return (
        <>
        <article id="promoter_form_a">
        <form className="promoterForm">
            <h2 className="formTitle">Promoter Information</h2>

                <div className="row">
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="name">Promoter: </label>
                            <input type="text" id="name" className="form-field"
                            autoFocus placeholder="Promoter" value={promoter.name}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="company">Company: </label>
                            <input type="text" id="company" className="form-field"
                            placeholder="Company" value={promoter.company}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="address">Address</label>
                            <input type="text" id="address" className="form-field"
                            placeholder="Address" value={promoter.address}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                </div>

            <div className="flex">
                
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="city">City: </label>
                        <input type="text" id="city" className="form-field" 
                        placeholder="City" value={promoter.city}
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="state">St: </label>
                        <input type="text" id="state" className="form-field" 
                        placeholder="Promoter Time" value={promoter.state}
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="zip">Zip: </label>
                        <input type="text" id="zip" className="form-field" 
                        placeholder="Zip" value={promoter.zip}
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
            </div>    

                <div className="flex">
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="phone">Phone: </label>
                            <input type="text" id="phone" className="form-field"
                            placeholder="Phone" value={promoter.phone}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="cell_phone">Cell: </label>
                            <input type="text" id="cell_phone" className="form-field"
                            placeholder="Cell" value={promoter.cell_phone}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                </div>

                <div className="column">
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="email">E-mail: </label>
                            <input type="text" id="email" className="form-field"
                            placeholder="E-mail" value={promoter.email}
                            onChange={handleControlledInputChange} />
                        </div>
                    </fieldset>
                </div>

                <div className="row">
                    <fieldset className="form">
                        <div className="form-group">    
                            <textarea cols="50" rows="10" 
                            id="notes" className="form-field"
                            value={promoter.notes} placeholder="Notes"
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    
                </div>
                    
                
            
            
            
         
        </form>
        </article>
        </>
    )
    }
