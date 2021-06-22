import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { TM } from './components/tm';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <>
    <Router>
      <TM />
    </Router>
  </>,
  document.getElementById('root')
);

