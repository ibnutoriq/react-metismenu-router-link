/**
 * dev/App.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 08.09.2016
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
import MetisMenu from 'react-metismenu';
//import MetisMenu from '../../react-metismenu/src';
import RouterLink from '../src/RouterLink';

const Menu1 = () => <div><u>Menu 1 View</u></div>;
const Menu2 = () => <div><i>Menu 2 View</i></div>;
const SubMenu = () => <div><s>SubMenu View</s></div>;

const menu = [
  {
    icon: 'dashboard',
    label: 'Menu 1',
    to: 'menu-1',
  },
  {
    icon: 'bell',
    label: 'Menu 2',
    to: 'menu-2',
  },
  {
    icon: 'bolt',
    label: 'Menu 3',
    content: [
      {
        icon: 'bolt',
        label: 'Sub Menu',
        to: 'sub-menu',
      },
    ],
  },
  {
    icon: 'external-link',
    label: 'External Link',
    externalLink: true,
    to: 'https://www.google.com',
  },
];

const App = props => {
  return (
    <div>
      <MetisMenu
        content={menu}
        LinkComponent={RouterLink}
      />
      <h2>Page Content</h2>
      <Link to="menu-1">External Menu 1</Link>
      <Link to="menu-2">External Menu 2</Link>
      {props.children || "Greeter Page"}
    </div>
  );
};

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="menu-1" component={Menu1} />
      <Route path="menu-2" component={Menu2} />
      <Route path="sub-menu" component={SubMenu} />
    </Route>
  </Router>,
  document.getElementById('root')
);
