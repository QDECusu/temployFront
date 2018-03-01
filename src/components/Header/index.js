import React, { PureComponent } from 'react';
import Button from 'material-ui/Button';

class Header extends PureComponent {
	render() {
		return (
			<div style={styles.container}>
				<Button>
					Home
				</Button>
				<Button>
					About
				</Button>
				<Button
					onClick={this.props.logout}
				>
					Logout
				</Button>
			</div>
		);
	}
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: 'red',
		height: 80,
	},
};

export default Header;
