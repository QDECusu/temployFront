import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './reducers';

ReactDOM.render(
	<Provider store={store}>
		<AlertProvider template={AlertTemplate}>
			<App />
		</AlertProvider>
	</Provider>
	, document.getElementById('root'),
);
registerServiceWorker();
