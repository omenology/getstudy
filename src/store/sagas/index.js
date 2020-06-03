import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../action/actionTypes";
import { fetchDataLineSaga, fetchDataPieSaga } from "./charts";

export function* chartsListener() {
  yield takeEvery(actionTypes.INIT_FETCH_DATA_LINE, fetchDataLineSaga);
  yield takeEvery(actionTypes.INIT_FETCH_DATA_PIE, fetchDataPieSaga);
}
