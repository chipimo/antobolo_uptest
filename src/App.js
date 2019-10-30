import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/shards-dashboards.1.1.0.min.css";

import "antd/dist/antd.css";
import "./assets/styles/bootstrap/all.min.css";
import "mdbreact/dist/css/mdb.css";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        if (route.path === null) {
          return (
            <Route
              component={withTracker(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        }
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);
