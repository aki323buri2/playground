import React from 'react';
import {
  Paper, 
  IconButton, 
} from '@material-ui/core'
import { useMuiStyles } from '../../hooks/muiHooks';
import DatePicker from '../../components/DatePicker';
import Selector from '../../components/Selector';
import { useBukaList } from '../../hooks/bukaHooks';
import { useFormik, setNestedObjectValues } from 'formik'; 
import CheckIcon from '@material-ui/icons/Check';

const useStyles = useMuiStyles(theme => ({
  root: {
    padding: theme.spacing(1), 
  }, 
  flex: {
    display: 'flex', 
    alignItems: 'flex-end', 
    '&>:not(:nth-child(1))': {
      marginLeft: theme.spacing(1), 
    }, 
  }, 
  buka: {
    width: 200, 
  }, 
}));

const UrisakiHeader = ({
  className, 
}) => {
  const classes = useStyles(className)();
  const {bukaList} = useBukaList();
  const getBukaOptionLabel = x =>  `${x.syozok} - ${x.bukmn}`;
  const initialValues = {
    date: new Date(), 
    buka: null, 
  };
  const formik = useFormik({
    initialValues, 
    onSubmit: values => {
      console.log(values);
    }, 
  });

  return (
    <Paper className={classes.root}>
      <form className={classes.flex} onSubmit={formik.handleSubmit}>
        <DatePicker 
          label="納品日"
          date={formik.values.date} 
          onChange={value => formik.handleChange({
            target: {
              id: 'date', 
              value, 
            }, 
          })} 
        />
        <Selector 
          label="所属CD"
          value={formik.values.buka} 
          onChange={value => formik.handleChange({
            target: {
              id: 'buka', 
              value, 
            }, 
          })}
          options={bukaList}
          getOptionLabel={getBukaOptionLabel}
          className={classes.buka}
        />
        <IconButton type="submit">
          <CheckIcon />
        </IconButton>
      </form>
      <div>
        <pre>{JSON.stringify({
          values: formik.values, 
        }, null, 2)}</pre>
      </div>
    </Paper>
  )
}

export default UrisakiHeader
