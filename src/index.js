import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import App from './App';

import './index.scss';

const csFormType = window.CS_FORM || process.env.CS_FORM || 'mwm';

ReactDOM.render(
  <Container>
    <App />
  </Container>,
  document.getElementById(`root-${csFormType}`)
);
