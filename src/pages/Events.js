import React, { Component } from 'react';
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';


import './Events.css';



class EventsPage extends Component {

    State = {
        creating: false
    };

    startCreateEventHandler = () => {
        this.setState({creating: true});
    };

    modalConfirmHandler = () => {
        this.setState({creating: false});
    };

    modalCancelHandler = () => {
        this.setState({creating: false});
    };


    render () {
        return (
            <React.Fragment>
            
             

                  <Modal 
                    title="Add Event" 
                    canCancel 
                    canConfirm 
                    onCancel={this.modalCancelHandler} 
                    on Confirm={this.modalConfirmHandler}> 
                  <p>Modal Content</p>
                  </Modal>

                <div className="events-control">
                <p>Create Event Showing</p>
                    <button className="btn" onClick={this.startCreateEventHandler}>Create Event</button>
                </div>
            </React.Fragment>
        );
    }
}

export default EventsPage;