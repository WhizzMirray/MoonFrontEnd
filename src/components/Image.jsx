import React from "react";
import ImageLoader from "react-load-image";

import { withStyles } from "@material-ui/core/styles";

import Spinner from "./Spinner.jsx";

const styles = theme => ({
  inner: {
    display: "table",
    margin: "0 auto",
    maxWidth: "770px",
    paddingBottom: "0.85em",
  }
});
const Image = props => (
  <ImageLoader className={props.classes.inner} {...props}>
    <img />
    <div>Error</div>
    <Spinner />
  </ImageLoader>
);

export default withStyles(styles)(Image);
