import { Dispatch } from "redux";
import Intro from "../components/Intro";

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
