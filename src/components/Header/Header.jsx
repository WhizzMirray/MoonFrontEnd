import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";

import headerStyle from "assets/styles/components/headerStyle.js";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  render() {
    const { classes, leftLinks, rightLinks } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes.absolute]: true,
      [classes.fixed]: true
    });
    return (
      <div>
        <AppBar className={appBarClasses} position="static" color="default">
          <Toolbar className={classes.container}>
            <div className={classes.flex}>
              <Button
                variant="flat"
                component={Link}
                to="/"
                color="inherit"
                className={classes.title}
              >
                Moon
              </Button>
              <Hidden xsDown implementation="css">
                {leftLinks}
              </Hidden>
            </div>
            <Hidden smDown implementation="css">
              {rightLinks}
            </Hidden>
            <Hidden mdUp>
              <Badge classes={{badge:classes.badge}} color="primary" badgeContent={4}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Badge>
            </Hidden>
            <Hidden mdUp implementation="css">
              <Drawer
                variant="temporary"
                anchor={"right"}
                open={this.state.mobileOpen}
                classes={{
                  paper: classes.drawerPaper
                }}
                onClose={this.handleDrawerToggle}
              >
                <div className={classes.appResponsive}>
                  {rightLinks}
                  <Hidden smUp>{leftLinks}</Hidden>
                </div>
              </Drawer>
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  leftLinks: PropTypes.node,
  rightLinks: PropTypes.node
};
export default withStyles(headerStyle)(Header);
