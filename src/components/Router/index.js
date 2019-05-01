import React, { PureComponent } from 'react';
import Account from '../Account';
import Header from '../Header';

class LoggedInRouter extends PureComponent {
	render() {
		return (
			<div style={styles.container}>
				<div style={styles.account}>
					<Account />
				</div>
				<div>
					<Header />
				</div>
			</div>
		);
	}
}

const styles = {
	container: {
		height: '100vh',
		width: '100wh',
		display: 'flex',
		justifyContent: 'space-between',
	},
	account: {
		height: '100%',
		width: '20%',
	},
};

export default LoggedInRouter;
