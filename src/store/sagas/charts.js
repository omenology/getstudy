import { put, delay } from "redux-saga/effects";

import { fetchDataLine, fetchDataPie, error } from "../action/charts";

const line = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const pie = [
  {
    id: "go",
    label: "go",
    value: 204,
  },
  {
    id: "make",
    label: "make",
    value: 116,
  },
  {
    id: "python",
    label: "python",
    value: 454,
  },
  {
    id: "javascript",
    label: "javascript",
    value: 393,
  },
  {
    id: "haskell",
    label: "haskell",
    value: 165,
  },
];

export function* fetchDataLineSaga(action) {
  try {
    yield delay(3000);
    yield put(fetchDataLine(line));
  } catch (err) {
    yield put(error(err));
  }
}

export function* fetchDataPieSaga(action) {
  try {
    yield delay(3000);
    yield put(fetchDataPie(pie));
  } catch (err) {
    yield put(error(err));
  }
}
