import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from 'src/nav-bar';
import Icon from 'src/icon';
import docConfig from './doc.config';
import DemoList from './mobileComponents/DemoList';
import componentDocs, { Markdown } from './docs-entry';
import componentDemos from './demo-entry';
import intro from './markdown/intro.md';

const registerRoute = (isDemo) => {
  const route = [];
  Object.keys(docConfig).forEach((lang, index) => {
    if (!isDemo) {
      route.push((<Route
        key="index"
        exact
        path="/"
        component={Markdown(intro)}
      />));
    }

    function addRoute(page) {
      let { path } = page;
      if (path) {
        path = path.replace('/', '');

        let Component = isDemo ? componentDemos[path] : componentDocs[path];
        if (isDemo && !componentDemos[path]) {
          Component = DemoList;
        }

        if (!Component) {
          return;
        }

        route.push((<Route
          key={page.path}
          path={page.path}
          exact
          component={(props) => {
            window.g_history = props.history;
            window.g_location = props.location;
            return (
              <React.Fragment>
                {
                  isDemo && (
                  <NavBar
                    icon={<Icon type="left" />}
                    onLeftClick={() => props.history.push('/')}
                  >
                    {page.title}
                  </NavBar>
                  )}
                <Component {...props} />
              </React.Fragment>
            );
          }}
        />));
      }
    }

    const navs = docConfig['zh-CN'].nav || [];
    navs.forEach((nav) => {
      if (nav.groups) {
        nav.groups.forEach((group) => {
          group.list.forEach(page => addRoute(page, lang));
        });
      } else {
        addRoute(nav, lang);
      }
    });
  });

  return route;
};

export default registerRoute;
