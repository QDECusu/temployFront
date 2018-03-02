import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { logout, getUser } from '../actions/user.action';
import Login from './Login';
import Account from './Account';
import Header from './Header';
import './style.css';

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
				<AlertProvider template={AlertTemplate}>
					{
						this.props.user === null
							? <Login />
							: (
								<div style={{ display: 'flex', justifyContent: '' }}>
									<Header logout={this.logout} />
									<Account />
								</div>
							)
					}
				</AlertProvider>
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
