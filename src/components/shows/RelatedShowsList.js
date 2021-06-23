import { useContext } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { ShowContext } from "../shows/ShowProvider"



export const AllRelatedShows = ({showInstance}) => {



    return(
        <>
            <div className="flex">
                <div className="showNav relatedShow" id={`show--${showInstance?.id}`}>
                    <Link to={`/show/${showInstance?.id}`}>
                    {showInstance?.date} 
                    </Link>    
                </div> 
                <div className="relatedShow">
                    {showInstance?.artist}
                </div>
                <div className="relatedShow">
                    {showInstance?.terms}
                </div>
            </div>
        </>
    )}


