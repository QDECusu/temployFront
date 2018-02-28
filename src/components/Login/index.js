import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { blue } from 'material-ui/colors';
import { login, signup } from '../../api/AuthService';

const Mode = {
	login: 'login',
	signup: 'signup',
};

class Login extends PureComponent {
	state = {
		username: '',
		email: '',
		password: '',
		repeat: '',
		repErr: '',
		mode: Mode.login,
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}
	passwordRepeat = (e) => {
		const { repErr, password } = this.state;
		if (repErr !== '' && password === e.target.value) {
			this.setState({ repErr: '' });
		}
		this.onChange(e);
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
			username, email, password, repeat,
		} = this.state;
		if (password === repeat) {
			signup({ username, email, password });
		} else {
			this.setState({ repErr: 'passwords don\'t match' });
		}
	}
	render() {
		const { mode, repErr } = this.state;
		const modeChange = this.getToggleMode(mode);
		return (
			<div style={styles.container}>
				<div style={{ margin: 60, display: 'flex', flexDirection: 'column' }}>
					<h1 style={styles.title}>{mode.toUpperCase()}</h1>
					<TextField
						name="username"
						label="username"
						onChange={this.onChange}
						value={this.state.username}
					/>
					<TextField
						name="password"
						type="password"
						label="password"
						onChange={this.onChange}
						value={this.state.password}
					/>
					{
						mode === 'signup' &&
							<TextField
								name="repeat"
								error={repErr !== ''}
								type="password"
								label={repErr === '' ? 'repeat password' : repErr}
								value={this.state.repeat}
								onChange={this.passwordRepeat}
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
					<div>
						Forgot Username/Password?
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
		backgroundColor: blue[0],
	},
	title: {
		textAlign: 'center',
		color: blue[800],
	},
};

export default Login;
