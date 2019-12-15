import React, { Component } from 'react';

import Modal from '../components/Modal/Modal';
import './Events.css';

class Eventspage extends Component {
    render () {
        return (
            <React.Fragment>
                <Modal title="Add Event" canCancel canConfirm>
                    <p>Modal Content</p>
                </Modal>
            <div className="events-control">
                <p>Book Property Listing Showings</p>
                    <button className="btn">Create Event</button>
            </div>
            </React.Fragment>
        );
    }
}

export default Eventspage;