import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import App from './App';

import './index.scss';

const csFormType = process.env.CS_FORM || 'spb';

ReactDOM.render(
  <Container>
    <App />
  </Container>,
  document.getElementById(`root-${csFormType}`)
);
