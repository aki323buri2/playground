import React from 'react';
import { useMuiStyles } from '../../hooks/muiHooks';
import Header from './Header';
import Drawer from './Drawer';
import Content from './Content';

const useStyles = useMuiStyles(theme => ({
  root: {}, 
}));

const Dashboard = ({
  className, 
  header, 
  drawer, 
  content, 
}) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles(className)();
  const toggleOpen = () => setOpen(!open);
  const onClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <Header
        menuClick={toggleOpen}
      >
        {header}
      </Header>
      
      <Drawer 
        open={open}
        onClose={onClose}
      >
        {drawer({ onClose })}
      </Drawer>
      
      <Content>
        {content}
      </Content>
    </div>
  )
}

export default Dashboard
