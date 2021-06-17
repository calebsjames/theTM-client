import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { TM } from './components/tm';
import './index.css';

ReactDOM.render(
  <>
    <Router>
      <TM />
    </Router>
  </>,
  document.getElementById('root')
);

