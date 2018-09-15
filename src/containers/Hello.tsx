import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../actions/";
import { EnthusiasmAction } from "../actions/";
import Hello from "../components/Hello";
import { IStoreState } from "../types/index";

export function mapStateToProps({
  enthusiasmLevel,
  hashingOutput
}: IStoreState) {
  return {
    enthusiasmLevel,
    name: hashingOutput
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
)(Hello);
