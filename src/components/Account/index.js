import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ user }) => ({ user });

class Account extends PureComponent {
	render() {
		const { user } = this.props;
		console.log(user);
		return (
			<div />
		);
	}
}

export default connect(mapStateToProps)(Account);
