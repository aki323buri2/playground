import React from 'react';
import  DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers'; 
import ja from 'date-fns/locale/ja';

const MuiPickersProvider = ({
  children, 
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ja}>
      {children}
    </MuiPickersUtilsProvider>
  )
}

export default MuiPickersProvider
