import React, { Component } from 'react';

import Modal from '../components/Modal/Modal';
import './Events.css';
import Backdrop from '../components/Backdrop/Backdrop';

class Eventspage extends Component {
    render () {
        return (
            <React.Fragment>
                <Backdrop />
                <Modal title="Add Event" canCancel canConfirm>
                    <p>Modal Content</p>
                </Modal>
            <div className="events-control">
                <p>Create Property Listing Event Tour</p>
                    <button className="btn">Create Event Showing</button>
            </div>
            </React.Fragment>
        );
    }
}

export default Eventspage;