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
    name: "Nama",
    selector: "nama",
    sortable: true,
  },
  {
    name: "Hadir",
    selector: "hadir",
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
      nama: "Yosep",
      hadir: <input type="checkbox" />,
      keterangan: <input type="text" />,
    },
  ];
  const classes = useStyle();
  return (
    <Grid container>
      <Grid item sm={12}>
        <Card jumbotron>
          <h1 className="text-center">Absen Kelas</h1>
          <p className="text-center">Biologi - Ipa 1</p>
        </Card>
      </Grid>
      <Grid item sm={12} className={classes.tengah}>
        <div className="text-right">
          Tanggal:
          <input type="Date" />
        </div>
        <Datatable columns={columns} data={data} pagination />
      </Grid>
    </Grid>
  );
};
export default Nilai;
