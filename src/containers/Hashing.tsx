import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../actions";
import { HashingAction } from "../actions";
import Hashing from "../components/Hashing";
import { IStoreState } from "../types";

export function mapStateToProps({ hashing }: IStoreState) {
  return {
    hashed: hashing.hashingOutput
  };
}

export function mapDispatchToProps(dispatch: Dispatch<HashingAction>) {
  return {
    onChange: (text: string) => dispatch(actions.hashingChangeText(text))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hashing);
