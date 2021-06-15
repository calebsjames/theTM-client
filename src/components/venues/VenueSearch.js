import React, { useContext } from "react"
import { VenueContext } from "./VenueProvider"


export const VenueSearch = () => {
  const { setSearchTerms } = useContext(VenueContext)

  return (
    <> 
      <input type="text"
        className="input--wide search"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Venues... " />
    </>
  )
}