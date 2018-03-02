import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ user }) => ({ user });

class Account extends PureComponent {
	render() {
		const { user } = this.props;
		return (
			<div style={styles.container}>
				<div style={styles.name}>
					<span>{user.first_name} {user.last_name}</span>
				</div>
				<div>
					<span>{user.email}</span>
				</div>
			</div>
		);
	}
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		backgroundColor: 'green',
		height: '100%',
	},
	name: {

	},
	email: {

	},
};

export default connect(mapStateToProps)(Account);
