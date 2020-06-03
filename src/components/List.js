import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, ListSubheader, makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 240,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    paddingLeft: 10,
    paddingRight: 10,
  },
}));

export default (props) => {
  const classes = useStyles();

  const title = props.title ? <ListSubheader>{props.title}</ListSubheader> : null;
  return (
    <List component="nav" subheader={title} className={classes.root}>
      <Link to="/aasda" style={{ textDecoration: "none", color: "inherit" }}>
        <ListItem button>
          <ListItemText primary="Mantag" />
        </ListItem>
      </Link>
    </List>
  );
};
