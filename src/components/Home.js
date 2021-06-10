export const Home = () => {
    const { getShows, shows, searchTerms } = useContext(PostContext)
    const { getUsers, users } = useContext(UserContext)
    const { getVenues, venues } = useContext(VenueContext)
    const { getPromoters, promoters } = useContext(PromoterContext)
    const { getHotels, hotels } = useContext(HotelContext)
    const { getContactNotes, contactNote } = useContext(ContactNoteContext)
    const { getSchedules, schedule } = useContext(ScheduleContext)
    
    

    const history = useHistory()
  


    

    // Initialization effect hook -> Go get show data
    useEffect(()=>{
      getShows()
      getVenues()
      getPromoters()
      getHotels()
      getContactNotes()
      getSchedules()
     
    }, [])
   




      return (
        <>
            <div id="head">
                
            </div>
            
        </>
    )
}