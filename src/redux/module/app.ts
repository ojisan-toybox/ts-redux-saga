// action type

const FETCH_DATA_START = "app/fetch_data_start";
const FETCH_DATA_SUCCESS = "app/fetch_data_success";
const FETCH_DATA_FAIL = "app/fetch_data_fail";

const actionTypes = {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
};

// action creators

const fetchDataStart = (data: any) => {
  return {
    type: actionTypes.FETCH_DATA_START,
    payload: data
  };
};

const fetchDataSuccess = (data: any) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data
  };
};

const fetchDataFail = (data: any) => {
  return {
    type: actionTypes.FETCH_DATA_FAIL,
    payload: data
  };
};

export const actionCreators = {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFail
};

// states

const initialState = {
  loading: false,
  loaded: false,
  data: null,
  error: null
};

// reducers

export const appReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_DATA_START:
      return {
        ...state,
        loading: true,
        loaded: false
      };

    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: payload
      };

    case actionTypes.FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: payload
      };
    default:
      return state;
  }
};
