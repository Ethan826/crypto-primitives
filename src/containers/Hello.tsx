import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../actions/";
import { EnthusiasmAction } from "../actions/";
import Hello from "../components/Hello";
import { IStoreState } from "../types/index";

export function mapStateToProps({
  enthusiasmLevel,
  languageName
}: IStoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  };
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmAction>) {
  return {
    onChange: (text: string) => dispatch(actions.changeText(text)),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
