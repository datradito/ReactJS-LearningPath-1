import React from 'react';
import ReactDOM from 'react-dom/client';
import {CounterApp} from './App.jsx';
import {FirstApp} from './FirstApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={ 5 } />
    <hr />
    <FirstApp title="Hello world" />
  </React.StrictMode>
)
