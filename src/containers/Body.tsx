import Intro from "../components/Intro";
import { Dispatch } from "redux";

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
