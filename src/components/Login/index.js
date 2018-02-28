import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { blue } from 'material-ui/colors';

const Mode = {
	login: 'login',
	signup: 'signup',
};

class Login extends PureComponent {
	state = {
		username: '',
		password: '',
		passwordRepeat: '',
		mode: Mode.login,
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}
	toggleMode = () => {
		const mode = this.getToggleMode(this.state.mode);
		this.setState({ mode });
	}
	getToggleMode = mode => (mode === Mode.login ? Mode.signup : Mode.login)
	onSubmit = () => (this.state.mode === Mode.login ? this.login() : this.signup())
	login = () => {
		console.log();
	}
	signup = () => {
		console.log('signup request here');
	}
	render() {
		const { mode } = this.state;
		const modeChange = this.getToggleMode(mode);
		return (
			<div style={styles.container}>
				<div style={{margin: 60, display: 'flex', flexDirection: 'column'}}>
					<h1 style={styles.title}>{mode.toUpperCase()}</h1>
					<TextField
						name="username"
						placeholder="username"
						onChange={this.onChange}
						value={this.state.username}
						floatingLabelText="username"
					/>
					<TextField
						name="password"
						type="password"
						placeholder="password" 
						onChange={this.onChange}
						value={this.state.password}
						floatingLabelText="password"
					/>
					{
						mode === 'signup' &&
							<TextField
								name="passwordRepeat"
								value={this.state.passwordRepeat}
								onChange={this.onChange}
							/>
					}
					<p></p>
					<div>
						<a href="">Forgot Username/Password?</a>
					</div>
					<p></p>
					<div style={{ display: 'flex' }}>
						<Button
							onClick={this.onSubmit}
						>
							<span>{mode}</span>
						</Button>
						<Button
							label={modeChange}
							onClick={this.toggleMode}
						>
							<span>{modeChange}</span>
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		borderColor: blue[800],
		borderStyle: 'solid',
	},
	title: {
		textAlign: 'center',
		color: blue[800],
	},
};

export default Login;
