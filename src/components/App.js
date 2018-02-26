import React, { Component } from 'react';
import Login from './Login';

class App extends Component {
	render() {
		return (
			<div style={styles.container}>
				<Login />
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

export default App;
