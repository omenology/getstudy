import * as actionTypes from "./actionTypes";

export const initFetchDataLine = () => {
  return {
    type: actionTypes.INIT_FETCH_DATA_LINE,
  };
};

export const fetchDataLine = (data) => {
  return {
    type: actionTypes.FETCH_DATA_LINE,
    data: data,
  };
};

export const initFetchDataPie = () => {
  return {
    type: actionTypes.INIT_FETCH_DATA_PIE,
  };
};

export const fetchDataPie = (data) => {
  return {
    type: actionTypes.FETCH_DATA_PIE,
    data: data,
  };
};

export const error = (error) => {
  return {
    type: actionTypes.ERROR,
    error: error,
  };
};
