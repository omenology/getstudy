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

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardSoal: {
    margin: "2% 10%",
    height: "auto",
    boxShadow: "2px 1px 8px lightgrey",
  },
  content: {
    flex: 1,
  },
  jumbotron: {
    width: "100%",
    padding: "2rem 1rem",
    marginBottom: "2rem",
    backgroundColor: "#e9f2fe",
    borderRadius: ".3rem",
    boxShadow: "none",
  },
  jumbotronSmall: {
    margin: "0 10%",
    padding: "2rem 1rem",
    marginBottom: "2rem",
    backgroundColor: "#e9f2fe",
    borderRadius: ".3rem",
    boxShadow: "none",
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
        [classes.cardSoal]: props.cardSoal,
        [classes.jumbotron]: props.jumbotron,
        [classes.jumbotronSmall]: props.jumbotronSmall,
      })}
    >
      {header}
      <CardContent className={classes.content}>{props.children}</CardContent>
    </Card>
  );
};
