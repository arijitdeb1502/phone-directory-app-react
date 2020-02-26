import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.handleDelete=this.handleDelete.bind(this,'TEST'); 
    this.state = {
      subscriberList: []
    } 
  }

  componentDidMount(){
    
    let subscriber1 = {
          id: 1,
          name: "Arijit Deb",
          phone: 98582504
    }

    let subscriberListToShow = [];
    subscriberListToShow.push(subscriber1);

    this.setState(()=>{
        return({
          subscriberList: subscriberListToShow
        })
    })

  }

  handleDelete(arg){
    alert('handleDelete'+arg);
  }

  render() {


    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "Arijit Deb",
    //     phone: 98582504
    //   },
    //   {
    //     id: 2,
    //     name: "Auritra Deb",
    //     phone: 98582503
    //   }
    // ]

    let subscribers = this.state.subscriberList;

    return (
      <div>
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <button  className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            subscribers.map((sub)=>{
              return <div key={sub.id} className="grid-container">
                 <span className="grid-item">{sub.name}</span>
                 <span className="grid-item">{sub.phone}</span>
                 <button  className="custom-btn delete-btn" onClick={this.handleDelete}>DELETE</button>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default App;
  