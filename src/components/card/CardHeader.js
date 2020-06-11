import React, { useState, Fragment } from "react";
import {
  CardHeader,
  makeStyles,
  Divider,
  IconButton,
  Popover,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons/";

const useStyle = makeStyles((theme) => ({
  header: {
    height: 30,
    color: theme.palette.primary.main,
  },
  divider: {
    // marginBottom: 10,
  },
}));

const Cardheader = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyle();

  const open = Boolean(anchorEl);

  const action = props.action ? (
    <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
      <MoreVert />
    </IconButton>
  ) : null;

  const listAaction = action ? (
    <Popover
      open={open}
      onClose={() => setAnchorEl(null)}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {props.action}
    </Popover>
  ) : null;

  return (
    <Fragment>
      <CardHeader
        component="div"
        className={classes.header}
        title={props.title}
        action={action}
      />
      <Divider className={classes.divider} />
      {listAaction}
    </Fragment>
  );
};

export default Cardheader;
