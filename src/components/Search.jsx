import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import SearchIcon from '@material-ui/icons/Search';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

function Search({...props}){
  const {classes} = props;
  return(
    <FormControl >
      <Input
        placeholder="Search for media"
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);