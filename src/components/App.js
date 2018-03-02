import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/user.action';
import Login from './Login';
import LoggedInRouter from './Router';
import './style.css';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = { getUser };

class App extends Component {
	componentWillMount() {
		this.getUser();
	}
	getUser = () => this.props.getUser();
	render() {
		return (
			<div style={styles.container}>
				{
					this.props.user === null
						? <Login />
						:	<LoggedInRouter />
				}
			</div>
		);
	}
}

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
