import React from 'react';

// ReactDOM is a subset of React that provides DOM specific methods
// and allows us to render React in the browser
// https://facebook.github.io/react/docs/react-dom.html
import ReactDOM from 'react-dom';

// webpack treats all assets as modules, including images
// so they can be included directly in the JavaScript
import './css/index.css';

// this is the main entry point for the app
// and where our main App component is created
import App from './javascript/App';

// create-react-app sets up offline working and caching for us out of the box
import registerServiceWorker from './javascript/registerServiceWorker';

// render the App component to the HTML element with ID #root
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
