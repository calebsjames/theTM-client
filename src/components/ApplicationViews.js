import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { UserProvider } from "./auth/AuthProvider"
import { Register } from "./auth/Register"
import { ContactNoteProvider } from "./contactNotes/ContactNoteProvider"
import { Home } from "./Home"
import { HotelProvider } from "./hotels/HotelProvider"
import { PromoterProvider } from "./promoters/PromoterProvider"
import { ScheduleProvider } from "./schedules/ScheduleProvider"
import { ShowProvider } from "./shows/ShowProvider"
import { VenueProvider } from "./venues/VenueProvider"



export const ApplicationViews = () => {

    return <>

        <Route exact path="/show/:showId(\d+)">
            <ShowProvider>
                <VenueProvider>
                    <PromoterProvider>
                        <ScheduleProvider>
                            <HotelProvider>
                                <ContactNoteProvider>
                                    <Home />
                                </ContactNoteProvider>
                            </HotelProvider>
                        </ScheduleProvider>
                    </PromoterProvider>
                </VenueProvider>
            </ShowProvider>
        
            
        </Route>      
    </>
}
