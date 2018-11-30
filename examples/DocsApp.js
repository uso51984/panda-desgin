import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './components/Header';
import Nav from './components/Nav';
import Container from './components/Container';
import Content from './components/Content';
import Simulator from './components/Simulator';
import registerRoute from './routers';

const getIframeUrl = (path) => {
  if (!path) {
    path = '';
  }
  return `${location.protocol}//${location.host}/mobile.html#/${path}`;
};

function iframeReady(iframe, callback) {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const interval = () => {
    if (iframe.contentWindow.g_history) {
      iframe.contentWindow.g_history.listen((location) => {
        callback(location);
      });
    } else {
      setTimeout(() => {
        interval();
      }, 50);
    }
  };

  if (doc.readyState === 'complete') {
    interval();
  } else {
    iframe.onload = interval;
  }
}

export default class WapApp extends React.Component {
  state = {
    path: getIframeUrl(location.hash.split('/')[1]),
  }
  componentDidMount() {
    this.history = createHistory();
    this.history.listen((location) => {
      this.setState({ path: getIframeUrl(location.hash.split('/')[1]) });
    });

    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframeReady(iframe, (e) => {
        const path = e.hash.split('/')[1];
        location.hash = path;
        this.setState({ path: getIframeUrl(path) });
      });
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Nav />
          <Container>
            <Content>
              {registerRoute()}
            </Content>
          </Container>
          <Simulator path={this.state.path} />
        </div>
      </Router>
    );
  }
}
