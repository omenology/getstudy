import React from "react";
import { Grid, Typography } from "@material-ui/core/";
import Datatable from "react-data-table-component";
import Card from "../components/card/card";

import { makeStyles } from "@material-ui/core/";
const useStyle = makeStyles((theme) => ({
  tengah: {
    padding: "20px 10%",
  },
}));

const columns = [
  {
    name: "Mata Pelajaran",
    selector: "mataPelajaran",
    sortable: true,
  },
  {
    name: "KKM",
    selector: "kkm",
  },
  {
    name: "Nilai",
    selector: "nilai",
  },
  {
    name: "Keterangan",
    selector: "keterangan",
  },
];

const Nilai = (props) => {
  const data = [
    {
      _id: "5eabb6537c69fc7ae3772c45",
      mataPelajaran: "Matematika",
      kkm: "75",
      nilai: "80",
      keterangan: "Lulus",
    },
    {
      _id: "5eabb6537c69fc7ae3772c45",
      mataPelajaran: "Matematika",
      kkm: "75",
      nilai: "80",
      keterangan: "Lulus",
    },
    {
      _id: "5eabb6537c69fc7ae3772c45",
      mataPelajaran: "Matematika",
      kkm: "75",
      nilai: "80",
      keterangan: "Lulus",
    },
    {
      _id: "5eabb6537c69fc7ae3772c45",
      mataPelajaran: "Matematika",
      kkm: "75",
      nilai: "80",
      keterangan: "Lulus",
    },
    {
      _id: "5eabb6537c69fc7ae3772c45",
      mataPelajaran: "Matematika",
      kkm: "75",
      nilai: "80",
      keterangan: "Lulus",
    },
  ];
  const classes = useStyle();
  return (
    <Grid container>
      <Grid item sm={12}>
        <Card jumbotron>
          <h1 className="text-center">Nilai Mata Pelajaran Murid</h1>
        </Card>
      </Grid>
      <Grid item sm={12} className={classes.tengah}>
        <Datatable title="Example" columns={columns} data={data} pagination />
      </Grid>
    </Grid>
  );
};
export default Nilai;
