import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { white } from 'material-ui/colors';
import './style.css';
import './images/user.jpg';

const mapStateToProps = ({ user }) => ({ user });

class Account extends PureComponent {
	render() {
		const { user } = this.props;
		return (
			<div className="aside" style={styles.container}>
				<div>
					<img src="https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png" alt="Profile Picture" height="150" width="150"/>
				</div>
				<div className="accountInfo" style={styles.name}>
					<span>{user.first_name} {user.last_name}</span>
				</div>
				<div className="accountInfo" >
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
		backgroundColor: 'white',
		height: '100%',
		borderColor: white,
		borderStyle: 'solid',
		backgroundColor: white,
	},
	name: {
		textAlign: 'center',
		color: white,
	},
	email: {
		textAlign: 'center',
		color: white,
	},
};

export default connect(mapStateToProps)(Account);
