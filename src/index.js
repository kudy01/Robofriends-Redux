import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import thunkMiddleware from 'redux-thunk'
import { searchRobots } from './reducers';
import App from './containers/App';

const logger = createLogger();

const store = createStore(searchRobots, applyMiddleware(thunkMiddleware , logger))

ReactDOM.render(<Provider store ={store}>
					<App />
				</Provider>	,document.getElementById('root'));// react dom package to use the function render, and it renders whatever is inside()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 

