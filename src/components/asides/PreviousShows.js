import { Link } from "react-router-dom"



export const PreviousShows = ({showInstance}) => {

    return(
    <div className="showNav" id={`show--${showInstance?.id}`}>
        <Link to={`/show/${showInstance?.id}`}>
        {showInstance?.date}  {showInstance?.venue?.name}  {showInstance?.venue?.city} {showInstance?.venue?.state}
        </Link>    
    </div> 
    )}
{/* <Link to={`/show/${showInstance?.id}`}>
        {showInstance?.date}  {showInstance?.venue?.name}  {showInstance?.venue?.city} {showInstance?.venue?.state}
        </Link>     */}
       
