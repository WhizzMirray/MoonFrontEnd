import React from "react";
import classNames from "classnames";

import Content from "../components/Content.jsx";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => {

};

class Homepage extends React.Component {
  render(){
    return(
    <Content><div>Hello</div></Content>
    )
  }
}

export default withStyles(styles)(Homepage);
