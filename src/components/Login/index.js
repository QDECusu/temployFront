import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { blue } from 'material-ui/colors';
import { login, signup } from '../../api/AuthService';
import './style.css';

const Mode = {
	login: 'login',
	signup: 'signup',
};

class Login extends PureComponent {
	state = {
		username: '',
		email: '',
		password: '',
		passwordRepeat: '',
		nameFirst: '',
		nameLast: '',
		zipCode: '',
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
	login = () => {
		const { username, password } = this.state;
		login({ username, password });
	}
	signup = () => {
		const {
			username, email, password, passwordRepeat,
		} = this.state;
		if (password === passwordRepeat) {
			signup({ username, email, password });
		}
	}
	render() {
		const { mode } = this.state;
		const modeChange = this.getToggleMode(mode);
		return (
			<div id="login" style={styles.container}>
				<div style={{ margin: 60, display: 'flex', flexDirection: 'column' }}>
					<h1 style={styles.title}>{mode.toUpperCase()}</h1>
					<TextField
						name="username"
						placeholder="username"
						onChange={this.onChange}
						value={this.state.username}
					/>
					<TextField
						name="password"
						type="password"
						placeholder="password"
						onChange={this.onChange}
						value={this.state.password}
					/>
					{
						mode === 'signup' &&
							<TextField
								name="passwordRepeat"
								type="password"
								placeholder="repeat password"
								value={this.state.passwordRepeat}
								onChange={this.onChange}
							/>
					}
					{
						mode === 'signup' &&
							<TextField
								name="nameFirst"
								placeholder="first name"
								value={this.state.nameFirst}
								onChange={this.onChange}
							/>
					}
					{
						mode === 'signup' &&
							<TextField
								name="nameLast"
								placeholder="last name"
								value={this.state.nameLast}
								onChange={this.onChange}
							/>
					}
					{
						mode === 'signup' &&
							<TextField
								name="email"
								type="email"
								placeholder="email"
								value={this.state.email}
								onChange={this.onChange}
							/>
					}
					{
						mode === 'signup' &&
							<TextField
								name="zipCode"
								placeholder="zip-code"
								value={this.state.zipCode}
								onChange={this.onChange}
							/>
					}
					<div style={{ display: 'flex', justifyContent: 'space-between', margin: 10 }}>
						<Button
							onClick={this[mode]}
							variant="raised"
							color="primary"
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
					{ mode === 'login' &&
						<div>
							<a href="">Forgot Username/Password?</a>
						</div>
					}
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
		backgroundColor: blue[0],
	},
	title: {
		textAlign: 'center',
		color: blue[800],
	},
};

export default Login;
