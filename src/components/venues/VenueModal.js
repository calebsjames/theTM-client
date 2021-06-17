import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ShowContext } from '../shows/ShowProvider';
import { Venue } from './Venue';
import { VenueFormModal } from './VenueFormModal';
import { VenueList } from './VenueList';
import { VenueContext } from './VenueProvider';
import { VenueSearch } from './VenueSearch';



export const VenueModal = () => {
    const { addVenue, venue, modal, setModal, setVenue } = useContext(VenueContext)
    const { show, getShowById, setShow, updateShow } = useContext(ShowContext)
    const toggle = () => setModal(!modal);
    const showId = useParams()
    

  
    
    
    const handleClickSaveVenue = () => {
        
        
        getShowById(showId.showId)
            //then setShow to that found Show
            .then(Show => {
                setShow(Show)

        addVenue(venue)
        .then(venue => {

            show.venue = venue
            setVenue(venue)
            
            // update state
            setShow(show)
            updateShow(show)
            setModal(!modal)
        })
        
        })
        getShowById(showId.showId)
            //then setShow to that found Show
            .then(Show => {
                setShow(Show)
                setVenue(Show.venue)
            })
    
    }

    return (
        <div>
            {/* <Button onClick={toggle}>Venue Modal</Button> */}
            <Modal isOpen={modal} toggle={toggle} className="modal--parent">
            {/* <ModalHeader toggle={toggle} className="modal--content">Modal title</ModalHeader> */}
            <ModalBody className="modal--content">
                <div className="flex">
                    <VenueFormModal />
                    <div>
                        <VenueList />
                    </div>
                </div>
                
                <br></br>
                <Button color="primary" onClick={handleClickSaveVenue}>Add New Venue</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalBody>

            </Modal>
        </div>
    );
}

export default VenueModal;