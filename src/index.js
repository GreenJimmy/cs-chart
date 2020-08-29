import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import App from './App';

import './assets/css/index.scss';

ReactDOM.render(
  <Container style={{ margin: '1000px 0' }}>
    <App />
  </Container>,
  document.getElementById('root')
);
