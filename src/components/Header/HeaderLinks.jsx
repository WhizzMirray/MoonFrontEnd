import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";

import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import Search from "../Search.jsx";

import ExpandListItem from "../ExpandListItem.jsx";
import headerLinkStyle from "assets/styles/components/headerLinksStyle.js";

const UnAuthLinks = ({ ...props }) => (
  <React.Fragment>
    <ListItem button>
      <ListItemText primary={"Login"} />
    </ListItem>
    <ListItem button>
      <ListItemText primary={"Register"} />
    </ListItem>
  </React.Fragment>
);
class HeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      open: false
    };
    this.handleClose = this.handleClose.bind(this);
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes, data } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const listClass = classNames({
      [classes.list]: true,
      [classes.flexInline]: true,
      [classes.flexInlineSmDown]: true
    });
    return (
      <List className={listClass}>
        <ListItem className={classes.listItem}>
          <Search />
        </ListItem>
        {!auth ? (
          <UnAuthLinks classes={classes} />
        ) : (
          <React.Fragment>
            <Hidden mdUp>
              <ExpandListItem listItem={data.username}>
                <List>
                  {data.menus.map((e, i) => (
                    <ListItem
                      key={i}
                      component={Link}
                      to={e.link}
                      button
                      className={classes.nested}
                    >
                      <ListItemText primary={e.name} />
                    </ListItem>
                  ))}
                </List>
              </ExpandListItem>
            </Hidden>
            <Hidden smDown>
              <ListItem className={classes.listItem}>
                <Badge color="primary" badgeContent={4}>
                  <Avatar className={classes.avatar} onClick={this.handleMenu}>
                    {data.username[0]}
                  </Avatar>
                </Badge>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  {data.menus.map((e, i) => (
                    <MenuItem
                      component={Link}
                      to={e.link}
                      key={i}
                      onClick={this.handleClose}
                    >
                      {e.name}
                    </MenuItem>
                  ))}
                </Menu>
              </ListItem>
            </Hidden>
          </React.Fragment>
        )}
      </List>
    );
  }
}
HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(headerLinkStyle)(HeaderLinks);
