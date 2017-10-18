import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import muiTheme from './config/theme';
import Layout from './components/Layout';
import Login from './containers/Login';
import Items from './containers/Items';
import Profile from './containers/Profile';
import {Provider} from 'react-redux';
import store from './redux/store.js';


const Boomtown = () => (
    <BrowserRouter>
        <Switch>
            <MuiThemeProvider muiTheme={muiTheme}>
                <Provider store={store}>
                    <Layout>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Items} />
                    <Route exact path="/profile/:id" component={Profile} />      
                    </Layout>
                </Provider>
            </MuiThemeProvider>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
