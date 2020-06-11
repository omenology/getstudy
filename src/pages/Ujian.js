import React, { useEffect, useCallback } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import {
  makeStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
} from "@material-ui/core/";
import Card from "../components/card/card";
import SpeedDials from "../components/SpeedDials";

const useStyle = makeStyles((theme) => ({
  tengah: {
    display: "flex",
    alignItems: "center",
  },
  inputJawaban: {
    width: "90%",
  },
}));

const Tugas = (props) => {
  console.log("rendr");
  const classes = useStyle();

  return (
    <React.Fragment>
      <div className={classes.tengah}>
        <Card jumbotronSmall>
          <h1 className="text-center">Ujian Mata Pelajaran</h1>
          <p className="text-center">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
        </Card>
      </div>
      <Card cardSoal>
        <Row>
          <Col xs={1}>
            <p className="text-right">1.</p>
          </Col>
          <Col xs={11}>
            <p>Ini soalllllll</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container className="text-center">
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="A"
                    control={<Radio color="primary" />}
                    label="A"
                  />
                  <FormControlLabel
                    value="B"
                    control={<Radio color="primary" />}
                    label="B"
                  />
                  <FormControlLabel
                    value="C"
                    control={<Radio color="primary" />}
                    label="C"
                  />
                  <FormControlLabel
                    value="D"
                    control={<Radio color="primary" />}
                    label="D"
                  />
                </RadioGroup>
              </FormControl>
            </Container>
          </Col>
        </Row>
      </Card>
      <Card cardSoal>
        <Row>
          <Col xs={1}>
            <p className="text-right">1.</p>
          </Col>
          <Col xs={11}>
            <p>Ini soalllllll</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container className="text-center">
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="standard-textarea"
                  label="Jawaban"
                  placeholder="Ketikan Jawaban"
                  multiline
                  className={classes.inputJawaban}
                />
              </form>
            </Container>
          </Col>
        </Row>
      </Card>
      <SpeedDials />
    </React.Fragment>
  );
};

export default Tugas;
