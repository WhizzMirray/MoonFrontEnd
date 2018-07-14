import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import headerLinkStyle from "assets/styles/components/headerLinksStyle.js";


const LeftLinks = ({ ...props }) => {
  const { classes,data } = props;
  const listClass = classNames({
    [classes.list]: true,
    [classes.flexInline]: true,
    [classes.flexInlineXsDown]: true,
  });
  return (
    <List className={listClass}>
      {data.links.map((e, i) => (
        <ListItem component={Link} to={e.link} button key={i}>
          <ListItemText primary={e.name} />
        </ListItem>
      ))}
    </List>
  );
};

LeftLinks.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(headerLinkStyle)(LeftLinks);
