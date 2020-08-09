import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Router';
import Header from './components/base/Header';

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route component={Main} />
            </BrowserRouter>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('index'));