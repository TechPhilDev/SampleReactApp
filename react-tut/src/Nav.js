import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import ResponsiveMenu from 'react-responsive-navbar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import {DevDisclaimer} from './Dev'

class Nav extends Component{
    render() {
        return(
            <div className="navdiv">
            <ResponsiveMenu
            menuOpenButton={<FontAwesomeIcon icon={faBars}/>}
            menuCloseButton={<FontAwesomeIcon icon={faTimes}/>}
            changeMenuOn="500px"
            largeMenuClassName="large-menu-classname"
            smallMenuClassName="small-menu-classname"
            menu={
            <>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/sr">SR</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    {/* Checks to see if user is on development site */}
                    {/* If so, displays GitHub link */}
                    {window.location.hostname === "localhost" || window.location.hostname === "dev.techphil.xyz"? <DevDisclaimer/>:""}
                </ul>
            </>
            }
            />
            </div> 
        )
    }
}

export default Nav


