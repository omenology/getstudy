import React from "react";
import routes from "../routes";

import { makeStyles, Grid, Box } from "@material-ui/core/";

import Appbar from "../components/AppBar";
import Drawer from "../components/Drawer";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& div": {
      //border: "1px solid black",
      //   padding: "1px",
      //   margin: "1px",
    },
  },
  content: {
    flexGrow: 1,
  },
}));

const Lay = (props) => {
  const classes = useStyle();

  return (
    <Grid container>
      <Grid item sm={12}>
        <Appbar />
      </Grid>
      <Grid item sm={12}>
        <div className={classes.root}>
          <Drawer routes={routes} />
          <Box p={2} className={classes.content}>
            {props.children}
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default Lay;
