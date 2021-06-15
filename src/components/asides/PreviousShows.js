import { useContext } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { ShowContext } from "../shows/ShowProvider"



export const PreviousShows = ({showInstance}) => {



    return(
    <div className="showNav" id={`show--${showInstance?.id}`}>
        <Link to={`/show/${showInstance?.id}`}>
        {showInstance?.date}  {showInstance?.venue?.name}  {showInstance?.venue?.city} {showInstance?.venue?.state}
        </Link>    
    </div> 
    )}


