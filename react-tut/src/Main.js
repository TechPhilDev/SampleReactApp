import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Nav from './Nav';
import Content from './Content';
import Radio from './Radio';


class Main extends Component {
    render() {
        return (
            <BrowserRouter>
            
                <div>
                    <Nav/>
                    <Content/>
                </div>
                <Radio/>
            </BrowserRouter>
        )
    }
}

export default Main;