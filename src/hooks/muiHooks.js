import { makeStyles } from "@material-ui/core";
import clsx from 'clsx'; 

export const useMuiStyles = (styles) => (className) => (options) => {
  const classes = makeStyles(styles)(options);
  classes.root = clsx(classes.root, className);
  return classes;
};