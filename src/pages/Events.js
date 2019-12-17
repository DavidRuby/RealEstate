import React, { Component } from 'react';
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';
import AuthContext from '../context/auth-context';


import './Events.css';



class EventsPage extends Component {

    State = {
        creating: false
    };

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.titleElRef = React.createRef();
        this.priceElRef = React.createRef();
        this.dateElRef = React.createRef();
        this.descriptionElRef = React.createRef();

    }



    startCreateEventHandler = () => {
        this.setState({ creating: true });
    };

    modalConfirmHandler = () => {
        this.setState({ creating: false });
        const title = this.titleElRef.current.value;
        const price = +this.priceElRef.current.value;
        const date = this.dateElRef.current.value;
        const description = this.descriptionElRef.current.value;

if  (
    title.trim().length === 0 || 
    price <= 0 || 
    date.trim().length === 0 || 
    description.trim().length === 0
    ) {
       return; 
    }

        const event = {title, price, date, description};
        console.log(event);

               /// GraphQL request to the back end
    
               const requestBody = {
                query: `
                 mutation {
                     createEvent(eventInput: {title: "${title}", description: "${description}", price: "${price}", date: "${date}") {
                         _id
                         email
                         description
                         date 
                         price
                         creator {
                             _id
                             email
                         }
                     }
                 }
                `
            };

        const token = this.context.token;

         fetch('http://locahost:8000/graphql', {
             method: 'POST',
             body: JSON.stringify(requestBody),
             headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
             }
         })
        .then(res => {
             if (res.status !== 200 && res.status !== 201) {
                 throw new Error('Failed!');
             }
             return res.json();
         })
         .then(resData => {
           console.log(resData);
         })
         .catch(err => {
             console.log(err);
         });
    };

    /// End of GraphQL request

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
                    on Cancel={this.modalCancelHandler} 
                    on Confirm={this.modalConfirmHandler}
                    > 
                    </Modal>

                  <form className="form-control">

                <div classname="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={this.titleElRef} />
                </div>

                <div classname="form-control">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" ref={this.priceElRef} />
                </div>

                <div classname="form-control">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" ref={this.dateElRef} />
                </div>

                <div classname="form-control">
                <label htmlFor="description">Description</label>
                <textarea id="description" 
                rows="4" 
                ref={this.descriptionElRef}
                />
                </div>

                <section className="modal__actions">
                {props.canCancel && <button className="btn" onClick={props.onCancel}>Cancel</button>}
                {props.canConfirm && <button className="btn" onClick={props.onConfirm}>Confirm</button>}
                </section>
                
                </form>
                
                    <div className="events-control">
                    <p>Create Event Showings</p>
                        <button className="btn" onClick={this.startCreateEventHandler}>
                        Create Event
                        </button>
                    </div>
               
            </React.Fragment>
        );
    };
};

export default EventsPage;