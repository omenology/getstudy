import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import {
  makeStyles,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core/";

const useStyle = makeStyles((theme) => ({
  drawerOpen: {
    width: 240,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: theme.spacing(7) + 1,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    whiteSpace: "nowrap",
  },
  listItem: {
    overflow: "hidden",
  },
  listItemText: {
    whiteSpace: "nowrap",
  },
}));

const Drawer = ({ routes }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const classes = useStyle();
  return (
    <div
      className={clsx({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <List
        className={clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
      >
        {routes.map((prop, index) => (
          <ListItem
            key={index}
            component={Link}
            to={prop.path}
            className={classes.listItem}
            button
            onClick={() => setSelectedIndex(index)}
            selected={selectedIndex === index}
          >
            <ListItemIcon>{prop.icon}</ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary={prop.title}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Drawer;
