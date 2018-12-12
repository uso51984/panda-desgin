import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import registerRoute from './routers';

export default class WapApp extends React.Component {
  componentDidMount() {
    window.g_history = createHistory();
  }
  render() {
    return (
      <div>
        <Router>
          <div className="mian-content">
            {
              registerRoute(true)
            }
          </div>
        </Router>
      </div>
    );
  }
}
