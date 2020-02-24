import React, { Component } from 'react';
import './Header.css';

// const Header = (props)=>{

//     return(
//         <div className='header'>
//             {props.heading}
//         </div>
//     )
// }
class Header extends Component {
    render(){
        return(
            <div className='header'>
                {this.props.heading}
            </div>
        )
    }
}

export default Header;