import React from 'react';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import store, {history} from './styles/store';



//importing react router dependencies
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import css from './styles/style.styl';
 
const router = (
    <Provider store ={store}>
        <Router history= {history}> 
            <Route path = "/" component = {App}>
                <IndexRoute component= {PhotoGrid}> </IndexRoute>
                <Route path = "/view/:postId" component = {Single}> </Route>
            </Route>
        </Router>
    </Provider>
  
)

render (router, document.getElementById('root'));