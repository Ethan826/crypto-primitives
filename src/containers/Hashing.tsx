import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../actions";
import { EnthusiasmAction } from "../actions";
import Hashing from "../components/Hashing";
import { IStoreState } from "../types";

export function mapStateToProps({
  enthusiasmLevel,
  hashingOutput
}: IStoreState) {
  return {
    hashed: hashingOutput
  };
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmAction>) {
  return {
    onChange: (text: string) => dispatch(actions.changeText(text))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hashing);
