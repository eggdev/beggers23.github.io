import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import withGracefulUnmount from 'react-graceful-unmount';
import configureStore from 'Store/configureStore';
// Actions
import * as sessionActions from 'Actions/session';

// Templates
import Sidebar from 'Components/Sidebar/Sidebar.jsx';
import Index from 'Templates/Index/Index.jsx';
import About from 'Templates/About/About.jsx';
import Experience from 'Templates/Experience/Experience.jsx';
import Projects from 'Templates/Projects/Projects.jsx';

import './styles/Common.scss';

const store = configureStore();

function Root() {
	return (
		<Provider store={store}>
			<HashRouter>
				<App />	
			</HashRouter>
		</Provider>
	);
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			val: false,
		};
	}
	
	componentDidMount() {
		if(!this.state.val) {
			console.log('here');
		}
	}

	render() {
		return (
			<div className="site-wrapper">
				<Sidebar />
				<div className="container">
					<Switch>
						<Route exact path="/about" component={About}/>
						<Route exact path="/experience" component={Experience}/>
						<Route exact path="/projects" component={Projects}/>
						<Route exact path="/" component={Index} />
					</Switch>
				</div>
			</div>
		);
	}
}

const mountNode = document.getElementById('root');

ReactDOM.render(<Root />, mountNode);
