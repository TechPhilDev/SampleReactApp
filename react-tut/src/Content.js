import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import SR from './SR';
import Contact from './Contact';

class Content extends Component {
    render() {
        return(
            <div className = "content">
                <Route exact path="/" component={Home}/>
                <Route path="/sr" component={SR}/>
                <Route path="/contact" component={Contact}/>
            </div>
        )
    }
}

export default Content

