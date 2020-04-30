import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';

import Nav from './Nav';
import Content from './Content';


class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <Nav/>
              <Content/>
            </div>
            </HashRouter>
        )
    }
}

export default Main;