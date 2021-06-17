import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ShowContext } from '../shows/ShowProvider';
import { Promoter } from './Promoter';
import { PromoterFormModal } from './PromoterFormModal';
import { PromoterList } from './PromoterList';
import { PromoterContext } from './PromoterProvider';
import { PromoterSearch } from './PromoterSearch';



export const PromoterModal = () => {
    const { addPromoter, promoter, modal, setModal } = useContext(PromoterContext)
    const { show, getShowById, setShow, updateShow } = useContext(ShowContext)
    const toggle = () => setModal(!modal);
    const showId = useParams()
    

  
    
    
    const handleClickSavePromoter = () => {
        
        getShowById(showId.showId)
            //then setShow to that found Show
            .then(Show => {
                setShow(Show)

        addPromoter(promoter)
        .then(promoter => {
            
            
            

            /* Set the property to the new value
            using object bracket notation. */
            show.promoter = promoter
            
            // update state
            setShow(show)
            updateShow(show)
            setModal(!modal)
        })
        
        })
    }

    return (
        <div>
            {/* <Button onClick={toggle}>Promoter Modal</Button> */}
            <Modal isOpen={modal} toggle={toggle} className="modal--parent">
            {/* <ModalHeader toggle={toggle} className="modal--content">Modal title</ModalHeader> */}
            <ModalBody className="modal--content">
                <div className="flex">
                    <PromoterFormModal />
                    <div>
                        <PromoterList />
                    </div>
                </div>
                
                <br></br>
                <Button color="primary" onClick={handleClickSavePromoter}>Add New Promoter</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalBody>

            </Modal>
        </div>
    );
}

export default PromoterModal;