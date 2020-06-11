import React from "react";

import DashboardPage from "./pages/Dashboard";
import Nilai from "./pages/Nilai";
import Animation from "./pages/Animation/Animation";
import Tugas from "./pages/Tugas";
import UploadTugas from "./pages/UploadTugas";
import Ujian from "./pages/Ujian";
import Absen from "./pages/AbsenMurid";

import { Dashboard, TableChart, GraphicEq } from "@material-ui/icons";

export default [
  {
    title: "Dashboard",
    path: "/",
    icon: <Dashboard />,
    component: DashboardPage,
  },
  {
    title: "Animation",
    path: "/animation",
    icon: <GraphicEq />,
    component: Animation,
  },
  {
    title: "Tugas",
    path: "/Tugas",
    icon: <TableChart />,
    component: Tugas,
  },
  {
    title: "Upload Tugas",
    path: "/Upload-Tugas",
    icon: <TableChart />,
    component: UploadTugas,
  },
  {
    title: "Ujian",
    path: "/Ujian",
    icon: <TableChart />,
    component: Ujian,
  },
  {
    title: "Nilai Sekolah",
    path: "/Nilai",
    icon: <TableChart />,
    component: Nilai,
  },
  {
    title: "Absen Murid",
    path: "/AbsenMurid",
    icon: <TableChart />,
    component: Absen,
  },
];
