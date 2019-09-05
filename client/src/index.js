import 'react-app-polyfill/ie11';
import babelPolyfill from 'babel-polyfill';
import "core-js/fn/symbol/iterator.js";
import "core-js/es6/symbol.js";
import 'core-js/fn/symbol';
import 'core-js/fn/promise';
import 'core-js/fn/object';
import 'core-js/fn/string';
import 'core-js/fn/array';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

//views
import App from './App';
import Report from './view/Report';
import Defects from './view/Defects';
import Repair from './view/Repair';
import Delete from './view/Delete';
import Pivot from './view/Pivot';
import Check from './view/Check';
import Item from './view/Item';

ReactDOM.render(
		<Router>
			<App>
				<Route exact path='/' component={Defects}/>
				<Route exact path='/defects' component={Defects}/>
				<Route exact path='/repair' component={Repair}/>
				<Route exact path='/delete' component={Delete}/>
				<Route exact path='/report' component={Report}/>
				<Route exact path='/check' component={Check}/>
				<Route exact path='/pivot' component={Pivot}/>
				<Route exact path='/item' component={Item}/>
			</App>
		</Router>
	,document.getElementById('root'));

serviceWorker.unregister();
