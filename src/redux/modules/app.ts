// action type

const FETCH_DATA_START = "app/fetch_data_start" as const;
const FETCH_DATA_SUCCESS = "app/fetch_data_success" as const;
const FETCH_DATA_FAIL = "app/fetch_data_fail" as const;

export const actionTypes = {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
};

// action creators

const fetchDataStart = (query: string) => {
  return {
    type: actionTypes.FETCH_DATA_START,
    payload: query
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

export type AppActionType = ReturnType<
  typeof fetchDataStart | typeof fetchDataSuccess | typeof fetchDataFail
>;

// states

export type AppStateType = {
  loading: boolean;
  loaded: boolean;
  data: any;
  error: any;
};

const initialState: AppStateType = {
  loading: false,
  loaded: false,
  data: null,
  error: null
};

// reducers
export const appReducer = (state = initialState, action: AppActionType) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_DATA_START:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case actionTypes.FETCH_DATA_SUCCESS:
      console.log(payload);
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
