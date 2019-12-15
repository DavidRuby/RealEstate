import React, { Component } from 'react';
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';


import './Events.css';



class Eventspage extends Component {

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
            
                {this.state.creating && <Modal title="Add Event" canCancel canConfirm onCancel={this.modalCancelHandler} on Confirm={this.modalConfirmHandler}> 
                <p>Modal Content</p>
                </Modal>}

                {this.state.creating && <Backdrop />}
                
                <div className="events-control">
                <p>Create Event</p>
                    <button className="btn" onClick={this.startCreateEventHandler}>Create Event Showing</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Eventspage;