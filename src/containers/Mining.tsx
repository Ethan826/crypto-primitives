import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../actions";
import { MiningAction } from "../actions";
import Mining from "../components/Mining";
import { IStoreState } from "../types";

const mapStateToProps = ({ mining }: IStoreState) => mining;

const mapDispatchToProps = (dispatch: Dispatch<MiningAction>) => {
  return {
    changeBlock: (e: string) => dispatch(actions.miningChangeBlock(e)),
    changeDifficulty: (e: string) => dispatch(actions.miningChangeDifficulty(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mining);
