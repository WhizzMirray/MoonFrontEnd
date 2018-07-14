import React from "react";
import PropTypes from "prop-types";

import ListItem from "@material-ui/core/ListItem";
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

class ExpandListItem extends React.Component {
  state = { open: true };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <React.Fragment>
        <ListItem button onClick={this.handleClick}>
          {this.props.listItem}
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          { this.props.children }
        </Collapse>
      </React.Fragment>
    );
  }
}

ExpandListItem.propTypes = {
  listItem: PropTypes.node.isRequired
};


export default ExpandListItem;


