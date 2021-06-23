import React, { useState, useContext, useEffect } from "react"
import { PromoterContext } from "../promoters/PromoterProvider"
import { useHistory } from "react-router-dom"
import { PromoterSearch } from "../promoters/PromoterSearch"
import { Promoter } from "./Promoter"




export const PromoterList = () => {
    
    const { getPromoters, promoters, searchTerms } = useContext(PromoterContext)
    // Since you are no longer ALWAYS displaying all of the promoters
    const [ filteredPromoters, setFiltered ] = useState([])

    const sortedPromoters  = promoters.sort((a, b) => a.name.localeCompare(b.name))

    // Initialization effect hook -> Go get promoter data 
     useEffect(() => {
       getPromoters()
     }, [])
    
    

  
    useEffect(() => {
        if (searchTerms !== undefined) {
         
          // If the search field is not blank, display matching promoters
          const subset = sortedPromoters.filter(promoter => promoter.name.toLowerCase().includes(searchTerms.toLowerCase()))
          setFiltered(subset)
        } else {
          // If the search field is blank, display all promoters
          setFiltered(promoters)
        }
      }, [searchTerms, promoters])


      return (
        <>
            
            <div className="promoterNav">
            <PromoterSearch />
            </div>
            <div className="promoters ">
                {
                  
                  filteredPromoters.map(promoterObject => {
                    
                      return <Promoter key={promoterObject.id} 
                      promoterInstance={promoterObject}
                      />
                    })
                }
            </div> 
        </>
    )
}


