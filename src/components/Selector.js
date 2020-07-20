import React from 'react';
import { Autocomplete } from '@material-ui/lab'; 
import { TextField } from '@material-ui/core'; 

const Selector = ({
  label, 
  onChange, 
  ...other 
}) => {
  return (
    <Autocomplete
      renderInput={props => (
        <TextField 
        {...props}
          label={label}
        />
      )}
      onChange={(_e, value) => onChange(value)}
      {...other}
    />
  )
}

export default Selector
