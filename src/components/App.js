import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout, getUser } from '../actions/user.action';
import Login from './Login';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
	logout, getUser,
};

class App extends Component {
	componentWillMount() {
		this.getUser();
	}
	getUser = () => this.props.getUser();
	logout = () => this.props.logout();
	render() {
		return (
			<div style={styles.container}>
				{
					this.props.user === null
						? <Login />
						: null
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
