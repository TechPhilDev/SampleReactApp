import React, {Component} from 'react';
import {Switch, BrowserRouter as Router,Route,Link,Redirect, useLocation} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
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
                    <AnimatePresence exitBeforeEnter>
                        <Switch location={window.location} key={window.location.pathname}>
                            <Route exact path="/" component={Home}/>
                            <Route path="/sr" component={SR}/>
                            <Route path="/contact" component={Contact}/>
                        </Switch>
                        </AnimatePresence>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Content

