import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core/";
import CardHeader from "./CardHeader";

const useStyle = makeStyles((theme) => ({
  variantPrimary: {
    borderLeft: `5px solid ${theme.palette.primary.main}`,
  },
  variantSuccess: {
    borderLeft: `5px solid ${theme.palette.success.main}`,
  },
  variantWarning: {
    borderLeft: `5px solid ${theme.palette.warning.main}`,
  },
  variantError: {
    borderLeft: `5px solid ${theme.palette.error.main}`,
  },
  cardBackground: {
    backgroundColor: "white",
    boxShadow: "2px 1px 5px lightgrey",
  },
  jumbotron: {
    margin: "none",
    borderRadius: "0px",
    borderBottom: "1px solid lightgrey",
    boxShadow: "0px 2px 4px -1px lightgrey, 0px 4px 5px 0px red",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: 1,
  },
}));

export default (props) => {
  const classes = useStyle();
  let header = null;
  if (props.headerTitle) {
    if (props.headerAction) {
      header = (
        <CardHeader title={props.headerTitle} action={props.headerAction} />
      );
    } else {
      header = <CardHeader title={props.headerTitle} />;
    }
  }
  return (
    <Card
      className={clsx(classes.card, {
        [classes.variantPrimary]: props.variantPrimary,
        [classes.variantSuccess]: props.variantSuccess,
        [classes.variantWarning]: props.variantWarning,
        [classes.variantError]: props.variantError,
        [classes.cardBackground]: props.cardBackground,
        [classes.jumbotron]: props.jumbotron,
      })}
    >
      {header}
      <CardContent className={classes.content}>{props.children}</CardContent>
    </Card>
  );
};
