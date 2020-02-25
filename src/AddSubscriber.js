import React, { Component } from 'react';
import Header from './Header';
import './AddSubscriber.css';

class AddSubscriber extends Component {

    constructor(props){

        super();
        this.onNameChange=this.onNameChange.bind(this);
        this.onPhoneChange=this.onPhoneChange.bind(this);


        this.state = {
            id: 0,
            name: '',
            phone: ''
        }


    }

    onNameChange=(e)=>{

        const name=e.target.value;
        
        this.setState(()=>{
            return{
                name
            }
        })

    }

    onPhoneChange=(e)=>{
        
        const phone=e.target.value;

        this.setState(()=>{
            return{
                phone
            }
        })

        // console.log(this.state)

    }

    render(){
        return(
            <div>
                <Header heading="Add Subscriber Page"/>
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                    <form className="subscriber-form">
                        <label htmlFor="name" className="label-control">Name: </label><br/>
                        <input id="name" type="text" className="input-control" name="name" onChange={this.onNameChange}></input><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone: </label><br/>
                        <input id="phone" type="text" className="input-control" name="phone" onChange={this.onPhoneChange}></input><br/><br/>
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber To be Added: </span><br/>
                            <span className="subscriber-info">Name: {this.state.name}</span><br/>
                            <span className="subscriber-info">Phone: {this.state.phone}</span><br/>
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default AddSubscriber;