import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../actions";
import { SymmetricAction } from "../actions";
import Symmetric from "../components/Symmetric";
import { IStoreState } from "../types";

const mapStateToProps = ({ symmetric }: IStoreState) => {
  return symmetric;
};

const mapDispatchToProps = (dispatch: Dispatch<SymmetricAction>) => {
  return {
    clickDecrypt: () => dispatch(actions.selectDecrypt()),
    clickEncrypt: () => dispatch(actions.selectEncrypt())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Symmetric);
