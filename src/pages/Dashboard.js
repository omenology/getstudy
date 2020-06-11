import React from "react";

import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Avatar,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@material-ui/core/";
import { GetApp } from "@material-ui/icons";

// import Card from "../components/card/card";

const useStyle = makeStyles((theme) => ({
  button: {
    textTransform: "capitalize",
  },
  media: {
    padding: "none",
    margin: "none",
  },
}));

const Dashboard = (props) => {
  console.log("rendr");

  const classes = useStyle();

  const notif = new Audio(
    "https://notificationsounds.com/soundfiles/44c4c17332cace2124a1a836d9fc4b6f/file-sounds-1147-that-was-quick.mp3"
  );

  return (
    <Grid container spacing={2}>
      <Grid item container sm={12} justify="space-between">
        <Typography variant="h4">Dashboard</Typography>
        <Button
          onClick={() => {
            notif.play();
          }}
          className={classes.button}
          size="small"
          variant="contained"
          color="primary"
          startIcon={<GetApp />}
        >
          Generate Report
        </Button>
      </Grid>
      <Grid item sm={12} md={6} lg={3}>
        <Card className={classes.root}>
          <CardActionArea ActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://i1.wp.com/quipperhome.wpcomstaging.com/wp-content/uploads/2019/11/Suku-Banyak-Matematika-Kelas-11-Pengertian-Pembagian-dan-Contoh-Soal-d.png?fit=800%2C533&ssl=1"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Matematika
              </Typography>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://66.media.tumblr.com/3c948972b7be8a79f1436393a3a26281/tumblr_ogw26dCy7A1smd799o1_1280.jpg"
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Deskripsi mata pelajaran
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sm={12} md={6} lg={3}>
        <Card className={classes.root}>
          <CardActionArea ActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://i1.wp.com/quipperhome.wpcomstaging.com/wp-content/uploads/2019/11/Suku-Banyak-Matematika-Kelas-11-Pengertian-Pembagian-dan-Contoh-Soal-d.png?fit=800%2C533&ssl=1"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Matematika
              </Typography>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://66.media.tumblr.com/3c948972b7be8a79f1436393a3a26281/tumblr_ogw26dCy7A1smd799o1_1280.jpg"
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Deskripsi mata pelajaran
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
