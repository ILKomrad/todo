import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import { Todo } from './components/Todo';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'; 
import { getTodos } from './actions';

import store from './store';
store.dispatch(getTodos());

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/task-list" component={Todo} />
            </Route>
        </Router>
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
