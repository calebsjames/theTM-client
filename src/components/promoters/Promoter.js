import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ShowContext } from '../shows/ShowProvider';
import { useParams } from 'react-router';
import { PromoterContext } from "./PromoterProvider";




//Called in CutomerList.js
export const Promoter = ({ promoterInstance }) => {
    
    const { show, getShowById, setShow, updateShow, getShows } = useContext(ShowContext)
    const { setPromoter } = useContext(PromoterContext)
    const { modal, setModal } = useContext(PromoterContext)

    const showId = useParams()

    const handlePromoterChoice = () => {
        console.log(showId.showId)
        debugger
        getShowById(showId.showId)
            //then setShow to that found Show
            .then(Show => {
                setShow(Show)
                show.promoter = promoterInstance
                setShow(show)
                setPromoter(promoterInstance) 
                updateShow(show)
                getShows()
                setModal(!modal)
        })
    }

    return(<section className="promoter">
        
        <button id={`${promoterInstance?.name}`} onClick={handlePromoterChoice}> 
        { promoterInstance?.name }
        </button>
        
        
    </section>
    )
}

