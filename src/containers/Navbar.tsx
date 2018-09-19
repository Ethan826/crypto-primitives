import { connect } from "react-redux";
import { Dispatch } from "redux";
import { NavigationAction } from "../actions";
import * as actions from "../actions";
import Navbar from "../components/Navbar";
import { IStoreState } from "../types";

const mapStateToProps = ({ navigation }: IStoreState) => navigation;

// clickDecrypt: () => dispatch(actions.symmetricSelectDecrypt()),
const mapDispatchToProps = (dispatch: Dispatch<NavigationAction>) => {
  return {
    chooseHashing: () => dispatch(actions.navigationSelectHashing()),
    chooseMining: () => dispatch(actions.navigationSelectMining()),
    choosePublic: () => dispatch(actions.navigationSelectPublic()),
    chooseSymmetric: () => dispatch(actions.navigationSelectSymmetric())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
