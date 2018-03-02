import React, { PureComponent } from 'react';
import Account from '../Account';
import Header from '../Header';

class LoggedInRouter extends PureComponent {
	render() {
		return (
			<div>
				<Account />
				<Header />
			</div>
		);
	}
}

export default LoggedInRouter;
