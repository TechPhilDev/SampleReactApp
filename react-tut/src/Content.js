import React, {Component} from 'react';
import {Switch, Router,Route,Link,Redirect} from 'react-router-dom';
import Home from './Home';
import SR from './SR';
import Contact from './Contact';




class Content extends Component {
    render() {
        return(
                <div className="outer">
            <div className="middle">
            <div className="inner">
                
                <div className = "content">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/sr" component={SR}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                    </div>
                
                </div>
                </div>
            </div>
        )
    }
}

export default Content

