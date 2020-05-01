import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';

import Nav from './Nav';
import Content from './Content';
import Radio from './Radio';


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Nav/>
                    <Content/>
                </div>
                <Radio/>
            </HashRouter>
        )
    }
}

export default Main;