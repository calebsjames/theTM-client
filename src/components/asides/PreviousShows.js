import { useContext } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { ShowContext } from "../shows/ShowProvider"



export const PreviousShows = ({showInstance}) => {
    const { getShows, shows, searchTerms, show, updateShow, addShow, setShow} = useContext(ShowContext)
    const history = useHistory()
    const showId = useParams()


    return(
    <div className="showNav" id={`show--${showInstance?.id}`}>
        <Link to={`/show/${showInstance?.id}`}>
        {showInstance?.date}  {showInstance?.venue?.name}  {showInstance?.venue?.city} {showInstance?.venue?.state}
        </Link>    
    </div> 
    )}


