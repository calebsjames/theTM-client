import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ContactNoteProvider } from "./contactNotes/ContactProvider"
import { Home } from "./Home"
import { HotelProvider } from "./hotels/HotelProvider"
import { PromoterProvider } from "./promoters/PromoterProvider"
import { ScheduleProvider } from "./schedules/ScheduleProvider"
import { ShowFormA } from "./shows/ShowFormA"
import { ShowList } from "./shows/ShowList"
import { ShowProvider } from "./shows/ShowProvider"
import { VenueProvider } from "./venues/VenueProvider"


export const ApplicationViews = () => {
    console.log("1")
    return <>
        <Route exact path="/">
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
