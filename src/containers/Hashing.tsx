import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../actions";
import { HashingAction } from "../actions";
import Hashing from "../components/Hashing";
import { IStoreState } from "../types";

export function mapStateToProps(state: IStoreState) {
  // tslint:disable-next-line:no-console
  console.log(state);
  return {
    hashed: state.hashingOutput
  };
}

export function mapDispatchToProps(dispatch: Dispatch<HashingAction>) {
  return {
    onChange: (text: string) => dispatch(actions.changeText(text))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hashing);
