import React, { useEffect, useCallback } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Jumbotron from "react-bootstrap/Jumbotron";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core/";
import { GetApp, CalendarToday, ListAlt } from "@material-ui/icons";

import Card from "../components/card/card";

const useStyle = makeStyles((theme) => ({
  button: {
    textTransform: "capitalize",
  },
  Jumbotron: {
    backgroundColor: "#e9f2fe",
  },
}));

const Tugas = (props) => {
  console.log("rendr");

  const classes = useStyle();

  return (
    <React.Fragment>
      <Jumbotron className={classes.Jumbotron}>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Card cardBackground>
            <Typography variant="h6">Materi</Typography>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Expansion Panel 1
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Card>
        </Grid>
        <Grid item sm={12} md={6}>
          <Card cardBackground>
            <Typography variant="h6">Tugas</Typography>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Expansion Panel 1
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Tugas;
