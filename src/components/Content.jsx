import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { paper } from "assets/styles/main.js";
const styles = theme => ({
  root: {
    ...paper,
    [theme.breakpoints.down("sm")]: {
      margin: "0px 10px 0px"
    }
  },
  homepage: {
    maxWidth: "500px",
    margin: "auto",
    marginTop: "15px",
  }
});

const Content = ({ ...props }) => {
  const { classes } = props;
  const paperClass = classNames({
    [classes.root]: true,
    [classes.homepage]: props.mediaCard
  });
  return <Paper className={paperClass}>{props.children}</Paper>;
};
Content.propTypes = {
  classes: PropTypes.object.isRequired,
  mediaCard: PropTypes.bool
};

export default withStyles(styles)(Content);
