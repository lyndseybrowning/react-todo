import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './javascript/App';
import registerServiceWorker from './javascript/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
