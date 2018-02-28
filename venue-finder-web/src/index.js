import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './scenes/Init/components/App/App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
