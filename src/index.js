import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Container fluid>
      <App />
    </Container>
  </BrowserRouter>,
  document.getElementById('root')
);
