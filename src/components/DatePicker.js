import React from 'react'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { useMuiStyles } from '../hooks/muiHooks';

const DATEPICKER_WIDTH = 180; 

const useStyles = useMuiStyles(theme => ({
  root: {
    width: DATEPICKER_WIDTH, 
  }, 
}));

const DatePicker = ({
  className, 
  date, 
  ...other 
}) => {
  const classes = useStyles(className)();
  return (
    <KeyboardDatePicker 
      className={classes.root}
      value={date}
      format="yyyy-MM-dd"
      autoOk 
      disableToolbar
      {...other}
    />
  )
}

export default DatePicker
