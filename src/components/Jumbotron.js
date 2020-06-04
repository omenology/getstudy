import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Jumbotron from "react-bootstrap/Jumbotron";

const useStyle = makeStyles((theme) => ({
  JumbotronPrimary: {
    margin: "auto 10%",
    backgroundColor: "#e9f2fe",
  },
}));

export default (props) => {
  const classes = useStyle();

  return (
    <Jumbotron
      className={clsx(classes.JumbotronPrimary, {
        [classes.JumbotronPrimary]: props.JumbotronPrimary,
      })}
    >
      <h1></h1>
      <p></p>
    </Jumbotron>
  );
};
