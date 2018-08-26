import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {TitleContainer} from './TitleContainer';


ReactDOM.render(<TitleContainer />, document.getElementById('root'));
registerServiceWorker();
