import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { blue } from 'material-ui/colors';
import { login, signup } from '../../actions/user.action';

const mapDispatchToProps = { login, signup };


const Mode = {
	login: 'login',
	signup: 'signup',
};

class Login extends PureComponent {
	state = {
		username: '',
		email: '',
		password: '',
		repErr: '',
		repeat: '',
		nameFirst: '',
		nameLast: '',
		zipCode: '',
		mode: Mode.login,
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}
	onRepeatChange = (e) => {
		if (this.state.password === e.target.value) {
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
		this.props.login({ username, password });
	}
	signup = () => {
		const {
			username, email, password, repeat,
		} = this.state;
		if (password === repeat) {
			this.props.signup({
				username,
				password,
				email: email === '' ? null : email,
			});
		} else {
			this.setState({ repErr: 'passwords don\'t match' });
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
						mode === Mode.signup &&
						<Fragment>
							<TextField
								name="repeat"
								type="password"
								label="repeat password"
								error={this.state.repErr !== ''}
								value={this.state.repeat}
								onChange={this.onRepeatChange}
							/>
							<TextField
								name="nameFirst"
								label="first name"
								value={this.state.nameFirst}
								onChange={this.onChange}
							/>
							<TextField
								name="nameLast"
								label="last name"
								value={this.state.nameLast}
								onChange={this.onChange}
							/>
							<TextField
								name="email"
								type="email"
								label="email"
								value={this.state.email}
								onChange={this.onChange}
							/>
							<TextField
								name="zipCode"
								label="zip-code"
								value={this.state.zipCode}
								onChange={this.onChange}
							/>
						</Fragment>
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
					{ mode === Mode.login &&
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

export default connect(null, mapDispatchToProps)(Login);
