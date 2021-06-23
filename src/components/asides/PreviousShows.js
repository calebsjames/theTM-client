import { useContext } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { ShowContext } from "../shows/ShowProvider"



export const PreviousShows = ({showInstance}) => {



    return(
        <>
        <div className="flex">
            <div className="showNav relatedShow showDate" id={`show--${showInstance?.id}`}>
                <Link to={`/show/${showInstance?.id}`}>
                {showInstance?.date} 
                </Link>    
            </div>
            <div className="relatedShow" id="venueName">
                {showInstance?.venue?.name}
            </div>
            <div className="relatedShow" id="venueLocation">
            {showInstance?.venue?.city} {showInstance?.venue?.state}
            </div> 
        </div>
        </>

    )}


