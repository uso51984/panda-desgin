import React from 'react';
import { Route } from 'react-router-dom';
import docConfig from './doc.config';
import DemoList from './mobileComponents/DemoList';
import componentDocs, { Markdown } from './docs-entry';
import componentDemos from './demo-entry';
import intro from './markdown/intro.md';
// import DemoPages from './components/DemoPages';
// import './utils/iframe-router';

const registerRoute = (isDemo) => {
  const route = [];
  Object.keys(docConfig).forEach((lang, index) => {
    if (isDemo) {
      route.push((<Route
        key={index}
        exact
        path="/"
        component={DemoList}
      />));
    } else {
      route.push((<Route
        key={'index'}
        exact
        path="/"
        component={Markdown(intro)}
      />));
    }
    function addRoute(page, lang1) {
      let { path } = page;
      if (path) {
        path = path.replace('/', '');

        let Component;
        if (path === 'demo') {
          component = DemoPages;
        } else {
          Component = isDemo ? componentDemos[path] : componentDocs[path];

          // component = isDemo ? componentDemos[path] : componentDocs[`${path}.${lang}`];
        }

        if (!Component) {
          return;
        }

        route.push((<Route
          key={page.path}
          path={page.path}
          component={(props) => {
            window.g_history = props.history;
            window.g_location = props.location;
            return <Component {...props} />;
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
