import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap/bootstrap';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
