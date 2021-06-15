import React, { useContext } from "react"
import { PromoterContext } from "./PromoterProvider"


export const PromoterSearch = () => {
  const { setSearchTerms } = useContext(PromoterContext)

  return (
    <> 
      <input type="text"
        className="input--wide search"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Promoters... " />
    </>
  )
}