//to be displayed in asside
export const PreviousShows = ({showInstance}) => (
       
    <div className="show" id={`show--${showInstance?.id}`}>
        {showInstance?.date} {showInstance?.venue}
    </div> 
    
)
