import * as React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../redux/module/app";

class AppBase extends React.Component<any, any> {
  componentDidMount() {
    this.props.fetch("piyoooo");
  }

  render() {
    return <div>hello, {JSON.stringify(this.props.app)}</div>;
  }
}

const mapStateToProps = (state: any) => ({
  app: state.app
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetch: (query: any) => dispatch(actionCreators.fetchDataStart(query))
  };
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppBase);
