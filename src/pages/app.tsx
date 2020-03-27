import * as React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/modules/app";

export const App: React.FC = () => {
  const state = useSelector((state: any) => ({ app: state.app }));
  const dispatch = useDispatch();
  return (
    <div>
      hi, {JSON.stringify(state.app)},{" "}
      <button
        onClick={() => dispatch(actionCreators.fetchDataStart("piyooooo"))}
      >
        fetch
      </button>
    </div>
  );
};
