import React from "react";

import DashboardPage from "./pages/Dashboard";
import Datatable from "./pages/Datatable";
import Animation from "./pages/Animation/Animation";
import Tugas from "./pages/Tugas";
import UploadTugas from "./pages/UploadTugas";
import Ujian from "./pages/Ujian";

import { Dashboard, TableChart, GraphicEq } from "@material-ui/icons";

export default [
  {
    title: "Dashboard",
    path: "/",
    icon: <Dashboard />,
    component: DashboardPage,
  },
  {
    title: "Data Table",
    path: "/datatable",
    icon: <TableChart />,
    component: Datatable,
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
];
