import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';
import './assets/styles/custom.css';

function UserData() {
    return (
      <BrowserRouter>
        <Routes component={Routes}/>
      </BrowserRouter>
    );
}

ReactDOM.render(<UserData/>, document.getElementById('root'));
