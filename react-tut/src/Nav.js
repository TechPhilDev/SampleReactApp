import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component{
    render() {
        return(
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/sr">SR</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul> 
        )
    }
}

export default Nav


