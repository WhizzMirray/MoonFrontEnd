import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "assets/css/main.css";
import Header from "./components/Header/Header.jsx";
import HeaderLinks from "./components/Header/HeaderLinks.jsx";
import LeftLinks from "./components/Header/LeftLinks.jsx";
import indexRoutes from "routes/index.jsx";
import mainStyle from "assets/styles/muiTheme.js";

const theme = createMuiTheme(mainStyle);
const hist = createBrowserHistory();

const dataL = {
  links: [{ name: "Popular", link: "/popular" }, { name: "New", link: "/new" }]
};

const dataR = {
  menus: [
    { name: "Profile", link: "/profile" },
    { name: "My Account", link: "/account" }
  ],
  username: "Whizzmirray"
};

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router history={hist}>
      <div>
        <Header
          rightLinks={<HeaderLinks data={dataR} />}
          leftLinks={<LeftLinks data={dataL} />}
        />
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} key={key} component={prop.component} />
            );
          })}
        </Switch>
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
