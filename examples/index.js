import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Container from './components/Container';
import Content from './components/Content';
import Simulator from './components/Simulator';
import './style/index.less';

ReactDOM.render(
  <div>
    <Header />
    <Nav />
    <Container>
      <Content />
    </Container>
    <Simulator/>
  </div>,
  document.getElementById('root'),
);

