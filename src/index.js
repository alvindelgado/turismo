import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componetes/App';
import { clon } from './carta_api';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App list={clon}/>
  </React.StrictMode>
);

